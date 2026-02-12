/**
 * ============================================
 * GESTION DE L'INTERFACE UTILISATEUR
 * ============================================
 * 
 * Ce fichier gère toutes les interactions avec l'utilisateur:
 * - Génération du tournoi
 * - Affichage des résultats dans les onglets
 * - Gestion de la navigation entre onglets
 * - Mise à jour de la barre de progression
 */

// ============================================
// VARIABLES GLOBALES
// ============================================

// Instance du générateur de tournoi
let scheduler = null;

// Calendrier généré
let currentSchedule = null;

// Statistiques du tournoi
let currentAnalysis = null;

// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application chargée');
    
    // Attacher les événements aux boutons
    attachEventListeners();
});

/**
 * ATTACHER LES ÉCOUTEURS D'ÉVÉNEMENTS
 * Configure tous les boutons et onglets
 */
function attachEventListeners() {
    // Bouton "Générer"
    document.getElementById('generateBtn').addEventListener('click', generateTournament);
    
    // Bouton "Regénérer"
    document.getElementById('regenerateBtn').addEventListener('click', regenerateTournament);
    
    // Boutons d'export
    document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
    document.getElementById('exportPdfBtn').addEventListener('click', exportToPdf);
    
    // Gestion des onglets
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
}

/**
 * ============================================
 * GÉNÉRATION DU TOURNOI
 * ============================================
 */
function generateTournament() {
    console.log('Début de la génération...');
    
    try {
        // Récupérer les paramètres du formulaire
        const numPlayers = parseInt(document.getElementById('numPlayers').value);
        const numCourts = parseInt(document.getElementById('numCourts').value);
        const numRounds = parseInt(document.getElementById('numRounds').value);
        const minutesPerRound = parseInt(document.getElementById('minutesPerRound').value);
        
        // Validation
        if (numPlayers < 4) {
            alert('Il faut au moins 4 joueurs');
            return;
        }
        
        if (numCourts * 4 > numPlayers) {
            alert(`Pas assez de joueurs pour ${numCourts} terrains (besoin de ${numCourts * 4} joueurs minimum)`);
            return;
        }
        
        // Créer le générateur
        scheduler = new TournamentScheduler(numPlayers, numCourts, numRounds, minutesPerRound);
        
        // Afficher la barre de progression
        showProgress();
        
        // Générer le calendrier avec callback de progression
        currentSchedule = scheduler.generateSchedule(updateProgress);
        
        // Analyser la qualité
        currentAnalysis = scheduler.analyzeQuality();
        
        // Cacher la barre de progression
        hideProgress();
        
        // Afficher les résultats
        displayResults();
        
        // Afficher les boutons d'action
        showActionButtons();
        
        console.log('Génération terminée avec succès');
        
    } catch (error) {
        console.error('Erreur lors de la génération:', error);
        alert('Erreur: ' + error.message);
        hideProgress();
    }
}

/**
 * REGÉNÉRER LE TOURNOI
 * Utilise les mêmes paramètres
 */
function regenerateTournament() {
    console.log('Regénération...');
    generateTournament();
}

/**
 * ============================================
 * AFFICHAGE DES RÉSULTATS
 * ============================================
 */
function displayResults() {
    // Afficher la section résultats
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('resultsSection').classList.add('fade-in');
    
    // Remplir chaque onglet
    displayCalendar();
    displayDistribution();
    displayStatistics();
    displayMatrix();
    
    // Activer le premier onglet
    switchTab('calendrier');
}

/**
 * AFFICHAGE DU CALENDRIER (Onglet 1)
 * Crée le tableau des parties
 */
function displayCalendar() {
    const container = document.getElementById('calendrierContent');
    
    // Créer le tableau HTML
    let html = '<table>';
    
    // En-tête
    html += '<thead><tr>';
    html += '<th>Partie</th>';
    
    for (let court = 1; court <= scheduler.numCourts; court++) {
        html += `<th colspan="2">Terrain ${court}</th>`;
    }
    
    html += '<th>Banc</th>';
    html += '</tr></thead>';
    
    // Corps du tableau
    html += '<tbody>';
    
    currentSchedule.forEach(round => {
        html += '<tr>';
        html += `<td><strong>${round.round}</strong></td>`;
        
        // Pour chaque terrain
        round.matches.forEach(match => {
            html += `<td>${formatPlayers(match.team1)}</td>`;
            html += `<td>${formatPlayers(match2)}</td>`;
        });
        
        // Joueurs au repos
        html += `<td class="resting">${formatPlayers(round.resting)}</td>`;
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    
    container.innerHTML = html;
}

/**
 * AFFICHAGE DE LA DISTRIBUTION DES TERRAINS (Onglet 2)
 */
function displayDistribution() {
    const container = document.getElementById('distributionContent');
    
    let html = '<table>';
    
    // En-tête
    html += '<thead><tr>';
    html += '<th>Joueur</th>';
    
    for (let court = 1; court <= scheduler.numCourts; court++) {
        html += `<th>Terrain ${court}</th>`;
    }
    
    html += '<th>Total</th>';
    html += '<th>Écart</th>';
    html += '</tr></thead>';
    
    // Corps
    html += '<tbody>';
    
    for (let player = 1; player <= scheduler.numPlayers; player++) {
        html += '<tr>';
        html += `<td><strong>J${player}</strong></td>`;
        
        const counts = [];
        for (let court = 1; court <= scheduler.numCourts; court++) {
            const count = currentAnalysis.courtDistribution[player][court] || 0;
            counts.push(count);
            html += `<td>${count}</td>`;
        }
        
        const total = counts.reduce((a, b) => a + b, 0);
        const ecart = Math.max(...counts) - Math.min(...counts);
        
        html += `<td><strong>${total}</strong></td>`;
        
        // Colorier selon l'écart
        let cssClass = '';
        if (ecart === 0) cssClass = 'perfect';
        else if (ecart === 1) cssClass = 'good';
        else cssClass = 'warning';
        
        html += `<td class="${cssClass}"><strong>${ecart}</strong></td>`;
        html += '</tr>';
    }
    
    html += '</tbody></table>';
    
    // Légende
    html += '<div class="legend">';
    html += '<h4>Légende des écarts:</h4>';
    html += '<span class="legend-item perfect">0 = Parfait équilibre</span>';
    html += '<span class="legend-item good">1 = Très bon équilibre</span>';
    html += '<span class="legend-item warning">2+ = À améliorer</span>';
    html += '</div>';
    
    container.innerHTML = html;
}

/**
 * AFFICHAGE DES STATISTIQUES (Onglet 3)
 */
function displayStatistics() {
    const container = document.getElementById('statistiquesContent');
    
    const qualityScore = scheduler.getQualityScore();
    const gamesValues = Object.values(currentAnalysis.gamesPlayed);
    const minGames = Math.min(...gamesValues);
    const maxGames = Math.max(...gamesValues);
    
    let html = '';
    
    // Score de qualité (grand)
    html += `<div class="quality-score">`;
    html += `<h2>🏆 Score de Qualité</h2>`;
    html += `<div class="score">${qualityScore}/100</div>`;
    html += `<div class="assessment">${getQualityAssessment(qualityScore)}</div>`;
    html += `</div>`;
    
    // Cartes de statistiques
    html += `<div class="stats-container">`;
    
    // Équité
    html += `<div class="stat-card">`;
    html += `<h3>📊 Équité du temps de jeu</h3>`;
    html += `<div class="stat-value">${maxGames - minGames}</div>`;
    html += `<div class="stat-label">Écart parties (0 = parfait)</div>`;
    html += `</div>`;
    
    // Partenaires
    html += `<div class="stat-card">`;
    html += `<h3>🤝 Répétitions partenaires</h3>`;
    html += `<div class="stat-value">${currentAnalysis.partnerRepeatDetails.length}</div>`;
    html += `<div class="stat-label">Paires répétées</div>`;
    html += `</div>`;
    
    // Terrains
    html += `<div class="stat-card">`;
    html += `<h3>🏟️ Équilibre terrains</h3>`;
    html += `<div class="stat-value">${currentAnalysis.maxCourtImbalance}</div>`;
    html += `<div class="stat-label">Écart max (0 = parfait)</div>`;
    html += `</div>`;
    
    html += `</div>`;
    
    // Détails des répétitions
    if (currentAnalysis.partnerRepeatDetails.length > 0) {
        html += `<div class="legend">`;
        html += `<h4>🤝 Détail des répétitions de partenaires:</h4>`;
        currentAnalysis.partnerRepeatDetails.forEach(([p1, p2, count]) => {
            html += `<div>J${p1} + J${p2}: <strong>${count} fois</strong></div>`;
        });
        html += `</div>`;
    }
    
    container.innerHTML = html;
}

/**
 * AFFICHAGE DE LA MATRICE (Onglet 4)
 */
function displayMatrix() {
    const container = document.getElementById('matriceContent');
    
    let html = '<table>';
    
    // En-tête
    html += '<thead><tr>';
    html += '<th></th>';
    
    for (let p = 1; p <= scheduler.numPlayers; p++) {
        html += `<th>J${p}</th>`;
    }
    
    html += '</tr></thead>';
    
    // Corps
    html += '<tbody>';
    
    for (let p1 = 1; p1 <= scheduler.numPlayers; p1++) {
        html += '<tr>';
        html += `<th>J${p1}</th>`;
        
        for (let p2 = 1; p2 <= scheduler.numPlayers; p2++) {
            if (p1 === p2) {
                html += '<td class="diagonal">-</td>';
            } else {
                const partner = scheduler.partnerCount[p1][p2] || 0;
                const opponent = scheduler.opponentCount[p1][p2] || 0;
                
                let cssClass = '';
                let text = '';
                
                if (partner > 0) {
                    text = `P:${partner}`;
                    cssClass = partner > 1 ? 'good' : 'perfect';
                } else if (opponent > 0) {
                    text = `O:${opponent}`;
                    cssClass = opponent > 1 ? 'warning' : '';
                }
                
                html += `<td class="${cssClass}">${text}</td>`;
            }
        }
        
        html += '</tr>';
    }
    
    html += '</tbody></table>';
    
    // Légende
    html += '<div class="legend">';
    html += '<h4>Légende:</h4>';
    html += '<span class="legend-item perfect">P:1 = Partenaire 1 fois</span>';
    html += '<span class="legend-item good">P:2+ = Partenaire multiple fois</span>';
    html += '<span class="legend-item">O:1 = Adversaire 1 fois</span>';
    html += '<span class="legend-item warning">O:2+ = Adversaire multiple fois</span>';
    html += '</div>';
    
    container.innerHTML = html;
}

/**
 * ============================================
 * GESTION DES ONGLETS
 * ============================================
 */
function switchTab(tabName) {
    // Désactiver tous les onglets
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Activer l'onglet sélectionné
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

/**
 * ============================================
 * BARRE DE PROGRESSION
 * ============================================
 */
function showProgress() {
    document.getElementById('progressContainer').style.display = 'block';
    document.getElementById('progressFill').style.width = '0%';
}

function updateProgress(current, total) {
    const percent = (current / total) * 100;
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressLabel').textContent = 
        `Génération en cours... (${current}/${total})`;
}

function hideProgress() {
    document.getElementById('progressContainer').style.display = 'none';
}

/**
 * ============================================
 * AFFICHER LES BOUTONS D'ACTION
 * ============================================
 */
function showActionButtons() {
    document.getElementById('regenerateBtn').style.display = 'block';
    document.getElementById('exportButtons').style.display = 'flex';
    document.getElementById('exportButtons').style.flexDirection = 'column';
    document.getElementById('exportButtons').style.gap = '10px';
}

/**
 * ============================================
 * EXPORTS (STUBS - implémentés dans export.js)
 * ============================================
 */
function exportToExcel() {
    console.log('Export Excel demandé');
    // Implémenté dans export.js
}

function exportToPdf() {
    console.log('Export PDF demandé');
    // Implémenté dans export.js
}
