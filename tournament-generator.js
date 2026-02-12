/**
 * ============================================
 * GÉNÉRATEUR DE TOURNOI - LOGIQUE PRINCIPALE
 * ============================================
 * 
 * Ce fichier contient toute la logique de génération du tournoi,
 * convertie du code Python original en JavaScript.
 * 
 * L'algorithme utilise 4 priorités pour optimiser l'équité:
 * 1. Équité du repos (priorité absolue)
 * 2. Partenaires variés (pénalité ×1000)
 * 3. Adversaires variés (pénalité ×100)
 * 4. Terrains équilibrés (pénalité ×10)
 */

class TournamentScheduler {
    /**
     * CONSTRUCTEUR
     * Initialise le générateur avec les paramètres du tournoi
     * 
     * @param {number} numPlayers - Nombre de joueurs (4-50)
     * @param {number} numCourts - Nombre de terrains (1-10)
     * @param {number} numRounds - Nombre de parties à jouer (1-30)
     * @param {number} minutesPerRound - Durée d'une partie en minutes (5-60)
     */
    constructor(numPlayers, numCourts, numRounds, minutesPerRound = 11) {
        // Paramètres du tournoi
        this.numPlayers = numPlayers;
        this.numCourts = numCourts;
        this.numRounds = numRounds;
        this.minutesPerRound = minutesPerRound;
        this.playersPerRound = numCourts * 4;  // 4 joueurs par terrain
        
        // Validation des paramètres
        if (numPlayers < 4) {
            throw new Error("Il faut au moins 4 joueurs");
        }
        if (this.playersPerRound > numPlayers) {
            throw new Error(`Pas assez de joueurs pour ${numCourts} terrains`);
        }
        
        // Statistiques pour suivre l'équité
        this.resetStats();
    }
    
    /**
     * RÉINITIALISATION DES STATISTIQUES
     * Remet à zéro tous les compteurs avant une nouvelle génération
     */
    resetStats() {
        // Compteur de fois que 2 joueurs ont été partenaires
        this.partnerCount = {};
        
        // Compteur de fois que 2 joueurs ont été adversaires
        this.opponentCount = {};
        
        // Nombre de parties jouées par joueur
        this.gamesPlayed = {};
        
        // Nombre de repos consécutifs par joueur
        this.consecutiveRests = {};
        
        // Utilisation des terrains par joueur
        this.courtUsage = {};
        
        // Initialiser tous les joueurs
        for (let i = 1; i <= this.numPlayers; i++) {
            this.partnerCount[i] = {};
            this.opponentCount[i] = {};
            this.gamesPlayed[i] = 0;
            this.consecutiveRests[i] = 0;
            this.courtUsage[i] = {};
        }
    }
    
    /**
     * SÉLECTION DES JOUEURS POUR UNE PARTIE
     * Choisit les joueurs qui vont jouer en priorisant:
     * 1. Ceux qui ont joué le moins
     * 2. Ceux qui se sont reposés le plus consécutivement
     * 
     * @param {Array} availablePlayers - Liste des joueurs disponibles
     * @returns {Array} - Liste des joueurs sélectionnés
     */
    selectPlayersForRound(availablePlayers) {
        // Trier les joueurs par priorité:
        // 1. Moins de parties jouées = priorité
        // 2. Plus de repos consécutifs = priorité
        const sorted = [...availablePlayers].sort((a, b) => {
            if (this.gamesPlayed[a] !== this.gamesPlayed[b]) {
                return this.gamesPlayed[a] - this.gamesPlayed[b];
            }
            return this.consecutiveRests[b] - this.consecutiveRests[a];
        });
        
        // Retourner les N premiers joueurs (N = terrains × 4)
        return sorted.slice(0, this.playersPerRound);
    }
    
    /**
     * CALCUL DU DÉSÉQUILIBRE DES TERRAINS
     * Mesure l'écart entre le terrain le plus/moins utilisé par un joueur
     * 
     * @param {number} player - Numéro du joueur
     * @returns {number} - Écart (0 = parfait)
     */
    getCourtImbalance(player) {
        const usage = this.courtUsage[player];
        const counts = [];
        
        for (let c = 1; c <= this.numCourts; c++) {
            counts.push(usage[c] || 0);
        }
        
        if (counts.length === 0) return 0;
        return Math.max(...counts) - Math.min(...counts);
    }
    
    /**
     * CALCUL DU SCORE D'UN MATCH
     * Plus le score est bas, mieux c'est
     * Pénalités appliquées selon les priorités
     * 
     * @param {Array} team1 - Équipe 1 [joueur1, joueur2]
     * @param {Array} team2 - Équipe 2 [joueur3, joueur4]
     * @param {number} courtNum - Numéro du terrain
     * @returns {number} - Score (plus bas = mieux)
     */
    calculateMatchScore(team1, team2, courtNum) {
        let score = 0;
        
        // PRIORITÉ 2: Pénalité pour partenaires répétés (×1000)
        const partnerPenalty = 1000;
        score += (this.partnerCount[team1[0]][team1[1]] || 0) * partnerPenalty;
        score += (this.partnerCount[team2[0]][team2[1]] || 0) * partnerPenalty;
        
        // PRIORITÉ 3: Pénalité pour adversaires répétés (×100)
        const opponentPenalty = 100;
        for (const p1 of team1) {
            for (const p2 of team2) {
                score += (this.opponentCount[p1][p2] || 0) * opponentPenalty;
            }
        }
        
        // PRIORITÉ 4: Pénalité pour déséquilibre des terrains (×10)
        const terrainPenalty = 10;
        const allPlayers = [...team1, ...team2];
        for (const player of allPlayers) {
            const timesOnThisCourt = this.courtUsage[player][courtNum] || 0;
            score += timesOnThisCourt * terrainPenalty;
            
            const imbalance = this.getCourtImbalance(player);
            score += imbalance * terrainPenalty;
        }
        
        return score;
    }
    
    /**
     * CRÉATION DES MATCHS ÉQUILIBRÉS
     * Essaie plusieurs combinaisons aléatoires et garde la meilleure
     * 
     * @param {Array} players - Joueurs qui vont jouer cette partie
     * @returns {Array} - Liste des matchs optimaux
     */
    createBalancedMatches(players) {
        if (players.length !== this.playersPerRound) {
            throw new Error("Nombre incorrect de joueurs");
        }
        
        let bestMatches = null;
        let bestScore = Infinity;
        
        // Nombre de tentatives (plus = meilleur résultat, mais plus lent)
        const numAttempts = Math.min(1000, Math.max(300, this.numCourts * 150));
        
        // Essayer plusieurs combinaisons aléatoires
        for (let attempt = 0; attempt < numAttempts; attempt++) {
            // Mélanger les joueurs aléatoirement
            const shuffled = [...players].sort(() => Math.random() - 0.5);
            
            const matches = [];
            let totalScore = 0;
            
            // Créer les matchs pour chaque terrain
            for (let court = 0; court < this.numCourts; court++) {
                const idx = court * 4;
                const team1 = [shuffled[idx], shuffled[idx + 1]];
                const team2 = [shuffled[idx + 2], shuffled[idx + 3]];
                
                const courtNum = court + 1;
                const matchScore = this.calculateMatchScore(team1, team2, courtNum);
                totalScore += matchScore;
                
                matches.push({ team1, team2, court: courtNum });
            }
            
            // Garder la meilleure combinaison
            if (totalScore < bestScore) {
                bestScore = totalScore;
                bestMatches = matches;
                
                // Si on trouve une combinaison parfaite (score 0), arrêter
                if (bestScore === 0) break;
            }
        }
        
        return bestMatches;
    }
    
    /**
     * MISE À JOUR DES STATISTIQUES
     * Enregistre qui a joué avec qui, sur quel terrain, etc.
     * 
     * @param {Array} matches - Liste des matchs de la partie
     * @param {Array} restingPlayers - Joueurs au repos
     */
    updateStats(matches, restingPlayers) {
        // Pour chaque match
        for (const match of matches) {
            const { team1, team2, court } = match;
            
            // Enregistrer les partenaires
            this.partnerCount[team1[0]][team1[1]] = (this.partnerCount[team1[0]][team1[1]] || 0) + 1;
            this.partnerCount[team1[1]][team1[0]] = (this.partnerCount[team1[1]][team1[0]] || 0) + 1;
            this.partnerCount[team2[0]][team2[1]] = (this.partnerCount[team2[0]][team2[1]] || 0) + 1;
            this.partnerCount[team2[1]][team2[0]] = (this.partnerCount[team2[1]][team2[0]] || 0) + 1;
            
            // Enregistrer les adversaires
            for (const p1 of team1) {
                for (const p2 of team2) {
                    this.opponentCount[p1][p2] = (this.opponentCount[p1][p2] || 0) + 1;
                    this.opponentCount[p2][p1] = (this.opponentCount[p2][p1] || 0) + 1;
                }
            }
            
            // Enregistrer les parties jouées et utilisation des terrains
            for (const player of [...team1, ...team2]) {
                this.gamesPlayed[player]++;
                this.consecutiveRests[player] = 0;  // Réinitialiser le repos
                this.courtUsage[player][court] = (this.courtUsage[player][court] || 0) + 1;
            }
        }
        
        // Incrémenter le repos pour ceux au banc
        for (const player of restingPlayers) {
            this.consecutiveRests[player]++;
        }
    }
    
    /**
     * GÉNÉRATION DU CALENDRIER COMPLET
     * Fonction principale qui génère toutes les parties
     * 
     * @param {Function} progressCallback - Fonction appelée pour mettre à jour la progression
     * @returns {Array} - Calendrier complet du tournoi
     */
    generateSchedule(progressCallback = null) {
        this.resetStats();
        const schedule = [];
        const allPlayers = Array.from({ length: this.numPlayers }, (_, i) => i + 1);
        
        // Générer chaque partie
        for (let round = 1; round <= this.numRounds; round++) {
            // Sélectionner qui joue
            const playing = this.selectPlayersForRound(allPlayers);
            const resting = allPlayers.filter(p => !playing.includes(p));
            
            // Créer les matchs optimaux
            const matches = this.createBalancedMatches(playing);
            
            // Mettre à jour les stats
            this.updateStats(matches, resting);
            
            // Ajouter au calendrier
            schedule.push({
                round,
                matches,
                resting
            });
            
            // Appeler le callback de progression (pour la barre)
            if (progressCallback) {
                progressCallback(round, this.numRounds);
            }
        }
        
        return schedule;
    }
    
    /**
     * ANALYSE DE LA QUALITÉ DU TOURNOI
     * Calcule toutes les métriques d'équité
     * 
     * @returns {Object} - Statistiques détaillées
     */
    analyzeQuality() {
        const analysis = {
            gamesPlayed: { ...this.gamesPlayed },
            maxPartnerRepeats: 0,
            partnerRepeatDetails: [],
            maxOpponentRepeats: 0,
            opponentRepeatDetails: [],
            courtDistribution: {},
            maxCourtImbalance: 0
        };
        
        // Analyser l'utilisation des terrains
        for (let player = 1; player <= this.numPlayers; player++) {
            analysis.courtDistribution[player] = { ...this.courtUsage[player] };
            
            const imbalance = this.getCourtImbalance(player);
            analysis.maxCourtImbalance = Math.max(analysis.maxCourtImbalance, imbalance);
        }
        
        // Analyser les répétitions de partenaires
        for (let p1 = 1; p1 <= this.numPlayers; p1++) {
            for (let p2 = p1 + 1; p2 <= this.numPlayers; p2++) {
                const count = this.partnerCount[p1][p2] || 0;
                if (count > 0) {
                    analysis.maxPartnerRepeats = Math.max(analysis.maxPartnerRepeats, count);
                    if (count > 1) {
                        analysis.partnerRepeatDetails.push([p1, p2, count]);
                    }
                }
            }
        }
        
        // Analyser les répétitions d'adversaires
        for (let p1 = 1; p1 <= this.numPlayers; p1++) {
            for (let p2 = p1 + 1; p2 <= this.numPlayers; p2++) {
                const count = this.opponentCount[p1][p2] || 0;
                if (count > 0) {
                    analysis.maxOpponentRepeats = Math.max(analysis.maxOpponentRepeats, count);
                    if (count > 1) {
                        analysis.opponentRepeatDetails.push([p1, p2, count]);
                    }
                }
            }
        }
        
        return analysis;
    }
    
    /**
     * CALCUL DU SCORE DE QUALITÉ (0-100)
     * Plus le score est élevé, meilleur est le tournoi
     * 
     * @returns {number} - Score sur 100
     */
    getQualityScore() {
        const analysis = this.analyzeQuality();
        let qualityScore = 100;
        
        // Pénalités
        const gamesValues = Object.values(analysis.gamesPlayed);
        const equityRange = Math.max(...gamesValues) - Math.min(...gamesValues);
        
        // qualityScore -= equityRange * 20;
        // qualityScore -= analysis.partnerRepeatDetails.length * 5;
        // qualityScore -= (analysis.maxPartnerRepeats > 1 ? (analysis.maxPartnerRepeats - 1) * 10 : 0);
        // qualityScore -= analysis.opponentRepeatDetails.length * 2;
        // qualityScore -= analysis.maxCourtImbalance * 3;
        
        // return Math.max(0, qualityScore);
        // --- CALCUL DU SCORE DE QUALITÉ AJUSTÉ ---

        // 1. Équité du temps de jeu (Poids fort : 20 pts par écart)
        qualityScore -= equityRange * 15;

        // 2. Partenaires (3 pts par paire répétée + 5 pts si 3x ou plus)
        qualityScore -= analysis.partnerRepeatDetails.length * 3;
        if (analysis.maxPartnerRepeats > 2) {
            qualityScore -= (analysis.maxPartnerRepeats - 2) * 5; // Pénalité accrue pour partenaires 3x+
        }

        // 3. Adversaires (Pénalité UNIQUEMENT pour 3x et plus)
        // On filtre pour ne garder que les répétitions problématiques
        const severeOpponents = analysis.opponentRepeatDetails.filter(detail => detail[2] >= 3);

        severeOpponents.forEach(([p1, p2, count]) => {
            // On applique la multiplication (count x 1) comme pénalité
            qualityScore -= (count * 1);
        });

        // 4. Déséquilibre des terrains (1 pt par écart max)
        qualityScore -= analysis.maxCourtImbalance * 1;

        // Retourner le score (minimum 0)
        return Math.max(0, Math.round(qualityScore));
    }
}

/**
 * ============================================
 * FONCTION UTILITAIRE: FORMATER LES JOUEURS
 * ============================================
 * Convertit une liste de joueurs en texte lisible
 * 
 * @param {Array} players - Liste de numéros de joueurs
 * @returns {string} - Texte formaté (ex: "J1 - J2 - J3")
 */
function formatPlayers(players) {
    if (!players || players.length === 0) return "-";
    return players.map(p => `${p}`).join(" - ");
}

/**
 * ============================================
 * FONCTION UTILITAIRE: OBTENIR L'ÉVALUATION
 * ============================================
 * Retourne un texte selon le score de qualité
 * 
 * @param {number} score - Score de qualité (0-100)
 * @returns {string} - Texte d'évaluation
 */
function getQualityAssessment(score) {
    if (score >= 90) return "EXCELLENT! Configuration quasi optimale";
    if (score >= 75) return "TRÈS BON! Configuration de haute qualité";
    if (score >= 60) return "BON! Configuration acceptable";
    return "Configuration avec compromis";
}
