/**
 * ============================================
 * EXPORTS EXCEL ET PDF
 * ============================================
 * 
 * Ce fichier gère l'export des résultats en fichiers Excel et PDF.
 * 
 * Bibliothèques utilisées:
 * - SheetJS (xlsx.js) pour Excel
 * - jsPDF + autoTable pour PDF
 */

/**
 * ============================================
 * EXPORT EXCEL
 * ============================================
 * Crée un fichier Excel avec 4 feuilles:
 * 1. Calendrier
 * 2. Distribution Terrains
 * 3. Statistiques
 * 4. Matrice
 */
function exportToExcel() {
    console.log('Export Excel en cours...');
    
    try {
        // Créer un nouveau classeur Excel
        const wb = XLSX.utils.book_new();
        
        // ========================================
        // FEUILLE 1: CALENDRIER
        // ========================================
        const calendrierData = createCalendrierSheet();
        const ws1 = XLSX.utils.aoa_to_sheet(calendrierData);
        
        // Largeurs des colonnes
        const colWidths = [{ wch: 10 }]; // Colonne "Partie"
        for (let i = 0; i < scheduler.numCourts * 2; i++) {
            colWidths.push({ wch: 15 }); // Colonnes terrains
        }
        colWidths.push({ wch: 25 }); // Colonne "Banc"
        ws1['!cols'] = colWidths;
        
        XLSX.utils.book_append_sheet(wb, ws1, "Calendrier");
        
        // ========================================
        // FEUILLE 2: DISTRIBUTION TERRAINS
        // ========================================
        const distributionData = createDistributionSheet();
        const ws2 = XLSX.utils.aoa_to_sheet(distributionData);
        
        // Largeurs des colonnes
        const distColWidths = [{ wch: 10 }]; // Joueur
        for (let i = 0; i < scheduler.numCourts + 2; i++) {
            distColWidths.push({ wch: 12 });
        }
        ws2['!cols'] = distColWidths;
        
        XLSX.utils.book_append_sheet(wb, ws2, "Distribution Terrains");
        
        // ========================================
        // FEUILLE 3: STATISTIQUES
        // ========================================
        const statsData = createStatisticsSheet();
        const ws3 = XLSX.utils.aoa_to_sheet(statsData);
        ws3['!cols'] = [{ wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }];
        
        XLSX.utils.book_append_sheet(wb, ws3, "Statistiques");
        
        // ========================================
        // FEUILLE 4: MATRICE
        // ========================================
        const matriceData = createMatriceSheet();
        const ws4 = XLSX.utils.aoa_to_sheet(matriceData);
        
        // Largeurs des colonnes
        const matColWidths = [{ wch: 8 }];
        for (let i = 0; i < scheduler.numPlayers; i++) {
            matColWidths.push({ wch: 8 });
        }
        ws4['!cols'] = matColWidths;
        
        XLSX.utils.book_append_sheet(wb, ws4, "Matrice");
        
        // ========================================
        // TÉLÉCHARGER LE FICHIER
        // ========================================
        const fileName = `Tournoi_${scheduler.numPlayers}joueurs_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);
        
        console.log('Export Excel terminé:', fileName);
        alert(`Fichier Excel téléchargé: ${fileName}`);
        
    } catch (error) {
        console.error('Erreur export Excel:', error);
        alert('Erreur lors de l\'export Excel: ' + error.message);
    }
}

/**
 * CRÉER LES DONNÉES DU CALENDRIER
 * Retourne un tableau 2D pour Excel
 */
function createCalendrierSheet() {
    const data = [];
    
    // Titre
    data.push([`${scheduler.numPlayers} Joueurs - Tournoi Pickleball`]);
    data.push([]); // Ligne vide
    
    // En-têtes
    const headers = ['Partie'];
    for (let court = 1; court <= scheduler.numCourts; court++) {
        headers.push(`Terrain ${court}`, ''); // 2 colonnes par terrain
    }
    headers.push('Banc');
    data.push(headers);
    
    // Données
    currentSchedule.forEach(round => {
        const row = [round.round];
        
        // Pour chaque terrain
        round.matches.forEach(match => {
            row.push(formatPlayers(match.team1));
            row.push(formatPlayers(match.team2));
        });
        
        // Joueurs au repos
        row.push(formatPlayers(round.resting));
        
        data.push(row);
    });
    
    return data;
}

/**
 * CRÉER LES DONNÉES DE DISTRIBUTION
 */
function createDistributionSheet() {
    const data = [];
    
    // Titre
    data.push(['Distribution des joueurs par terrain']);
    data.push([]); // Ligne vide
    
    // En-têtes
    const headers = ['Joueur'];
    for (let court = 1; court <= scheduler.numCourts; court++) {
        headers.push(`Terrain ${court}`);
    }
    headers.push('Total', 'Écart');
    data.push(headers);
    
    // Données
    for (let player = 1; player <= scheduler.numPlayers; player++) {
        const row = [`J${player}`];
        
        const counts = [];
        for (let court = 1; court <= scheduler.numCourts; court++) {
            const count = currentAnalysis.courtDistribution[player][court] || 0;
            counts.push(count);
            row.push(count);
        }
        
        const total = counts.reduce((a, b) => a + b, 0);
        const ecart = Math.max(...counts) - Math.min(...counts);
        
        row.push(total, ecart);
        data.push(row);
    }
    
    // Légende
    data.push([]);
    data.push(['Légende des écarts:']);
    data.push(['0 = Parfait équilibre']);
    data.push(['1 = Très bon équilibre']);
    data.push(['2+ = À améliorer']);
    
    return data;
}

/**
 * CRÉER LES DONNÉES DE STATISTIQUES
 */
function createStatisticsSheet() {
    const data = [];
    
    const qualityScore = scheduler.getQualityScore();
    const gamesValues = Object.values(currentAnalysis.gamesPlayed);
    
    // Score de qualité
    data.push(['SCORE DE QUALITÉ']);
    data.push([`${qualityScore}/100`]);
    data.push([getQualityAssessment(qualityScore)]);
    data.push([]);
    
    // Équité du temps de jeu
    data.push(['ÉQUITÉ DU TEMPS DE JEU']);
    data.push(['Joueur', 'Parties', 'Minutes jeu', 'Repos', 'Minutes repos']);
    
    for (let player = 1; player <= scheduler.numPlayers; player++) {
        const games = currentAnalysis.gamesPlayed[player];
        const minutesPlayed = games * scheduler.minutesPerRound;
        const rest = scheduler.numRounds - games;
        const minutesRest = rest * scheduler.minutesPerRound;
        
        data.push([
            `J${player}`,
            games,
            `${minutesPlayed} min`,
            rest,
            `${minutesRest} min`
        ]);
    }
    
    data.push([]);
    
    // Répétitions de partenaires
    data.push(['RÉPÉTITIONS DE PARTENAIRES']);
    if (currentAnalysis.partnerRepeatDetails.length > 0) {
        data.push(['Joueur 1', 'Joueur 2', 'Fois']);
        currentAnalysis.partnerRepeatDetails.forEach(([p1, p2, count]) => {
            data.push([`J${p1}`, `J${p2}`, count]);
        });
    } else {
        data.push(['✓ Aucune répétition!']);
    }
    
    return data;
}

/**
 * CRÉER LES DONNÉES DE LA MATRICE
 */
function createMatriceSheet() {
    const data = [];
    
    // Titre
    data.push(['Matrice des rencontres']);
    data.push([]);
    
    // En-têtes
    const headers = [''];
    for (let p = 1; p <= scheduler.numPlayers; p++) {
        headers.push(`J${p}`);
    }
    data.push(headers);
    
    // Données
    for (let p1 = 1; p1 <= scheduler.numPlayers; p1++) {
        const row = [`J${p1}`];
        
        for (let p2 = 1; p2 <= scheduler.numPlayers; p2++) {
            if (p1 === p2) {
                row.push('-');
            } else {
                const partner = scheduler.partnerCount[p1][p2] || 0;
                const opponent = scheduler.opponentCount[p1][p2] || 0;
                
                if (partner > 0) {
                    row.push(`P:${partner}`);
                } else if (opponent > 0) {
                    row.push(`O:${opponent}`);
                } else {
                    row.push('');
                }
            }
        }
        
        data.push(row);
    }
    
    // Légende
    data.push([]);
    data.push(['Légende:']);
    data.push(['P:1 = Partenaire 1 fois']);
    data.push(['P:2+ = Partenaire multiple fois']);
    data.push(['O:1 = Adversaire 1 fois']);
    data.push(['O:2+ = Adversaire multiple fois']);
    
    return data;
}

/**
 * ============================================
 * EXPORT PDF
 * ============================================
 * Crée un fichier PDF avec toutes les données
 */
function exportToPdf() {
    console.log('Export PDF en cours...');
    
    try {
        // Créer un nouveau document PDF (orientation paysage pour plus de largeur)
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('landscape', 'mm', 'a4');
        
        let yPosition = 20; // Position verticale courante
        
        // ========================================
        // PAGE 1: CALENDRIER
        // ========================================
        
        // Titre principal
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.text(`Tournoi Pickleball - ${scheduler.numPlayers} Joueurs`, 148, yPosition, { align: 'center' });
        
        yPosition += 10;
        
        // Informations du tournoi
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text(`${scheduler.numCourts} terrains • ${scheduler.numRounds} parties • ${scheduler.minutesPerRound} min/partie`, 148, yPosition, { align: 'center' });
        
        yPosition += 15;
        
        // Tableau du calendrier
        const calendrierHeaders = [['Partie']];
        for (let court = 1; court <= scheduler.numCourts; court++) {
            calendrierHeaders[0].push(`T${court} Équipe 1`, `T${court} Équipe 2`);
        }
        calendrierHeaders[0].push('Banc');
        
        const calendrierBody = currentSchedule.map(round => {
            const row = [round.round];
            
            round.matches.forEach(match => {
                row.push(
                    formatPlayers(match.team1),
                    formatPlayers(match.team2)
                );
            });
            
            row.push(formatPlayers(round.resting));
            
            return row;
        });
        
        doc.autoTable({
            head: calendrierHeaders,
            body: calendrierBody,
            startY: yPosition,
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [154, 205, 50], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 245] }
        });
        
        // ========================================
        // PAGE 2: DISTRIBUTION TERRAINS
        // ========================================
        doc.addPage();
        yPosition = 20;
        
        doc.setFontSize(16);
        doc.setFont(undefined, 'bold');
        doc.text('Distribution des joueurs par terrain', 148, yPosition, { align: 'center' });
        
        yPosition += 15;
        
        const distHeaders = [['Joueur']];
        for (let court = 1; court <= scheduler.numCourts; court++) {
            distHeaders[0].push(`Terrain ${court}`);
        }
        distHeaders[0].push('Total', 'Écart');
        
        const distBody = [];
        for (let player = 1; player <= scheduler.numPlayers; player++) {
            const row = [`J${player}`];
            
            const counts = [];
            for (let court = 1; court <= scheduler.numCourts; court++) {
                const count = currentAnalysis.courtDistribution[player][court] || 0;
                counts.push(count);
                row.push(count.toString());
            }
            
            const total = counts.reduce((a, b) => a + b, 0);
            const ecart = Math.max(...counts) - Math.min(...counts);
            
            row.push(total.toString(), ecart.toString());
            distBody.push(row);
        }
        
        doc.autoTable({
            head: distHeaders,
            body: distBody,
            startY: yPosition,
            styles: { fontSize: 9 },
            headStyles: { fillColor: [54, 96, 146], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 245] },
            // Colorier la colonne "Écart"
            didParseCell: function(data) {
                if (data.column.index === distHeaders[0].length - 1 && data.section === 'body') {
                    const ecart = parseInt(data.cell.text[0]);
                    if (ecart === 0) {
                        data.cell.styles.fillColor = [198, 224, 180]; // Vert
                    } else if (ecart === 1) {
                        data.cell.styles.fillColor = [255, 230, 153]; // Jaune
                    } else if (ecart >= 2) {
                        data.cell.styles.fillColor = [244, 176, 132]; // Orange
                    }
                }
            }
        });
        
        // ========================================
        // PAGE 3: STATISTIQUES
        // ========================================
        doc.addPage();
        yPosition = 20;
        
        const qualityScore = scheduler.getQualityScore();
        
        doc.setFontSize(16);
        doc.setFont(undefined, 'bold');
        doc.text('Statistiques du tournoi', 148, yPosition, { align: 'center' });
        
        yPosition += 15;
        
        // Score de qualité
        doc.setFontSize(14);
        doc.text(`Score de qualité: ${qualityScore}/100`, 20, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setFont(undefined, 'italic');
        doc.text(getQualityAssessment(qualityScore), 20, yPosition);
        
        yPosition += 15;
        
        // Tableau des temps de jeu
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Équité du temps de jeu', 20, yPosition);
        yPosition += 10;
        
        const statsHeaders = [['Joueur', 'Parties', 'Min. jeu', 'Repos', 'Min. repos']];
        const statsBody = [];
        
        for (let player = 1; player <= scheduler.numPlayers; player++) {
            const games = currentAnalysis.gamesPlayed[player];
            const minutesPlayed = games * scheduler.minutesPerRound;
            const rest = scheduler.numRounds - games;
            const minutesRest = rest * scheduler.minutesPerRound;
            
            statsBody.push([
                `J${player}`,
                games.toString(),
                minutesPlayed.toString(),
                rest.toString(),
                minutesRest.toString()
            ]);
        }
        
        doc.autoTable({
            head: statsHeaders,
            body: statsBody,
            startY: yPosition,
            styles: { fontSize: 9 },
            headStyles: { fillColor: [54, 96, 146] }
        });
        
        yPosition = doc.lastAutoTable.finalY + 15;
        
        // Répétitions de partenaires
        if (currentAnalysis.partnerRepeatDetails.length > 0) {
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.text('Répétitions de partenaires', 20, yPosition);
            yPosition += 10;
            
            const partnerHeaders = [['Joueur 1', 'Joueur 2', 'Fois']];
            const partnerBody = currentAnalysis.partnerRepeatDetails.map(([p1, p2, count]) => [
                `J${p1}`,
                `J${p2}`,
                count.toString()
            ]);
            
            doc.autoTable({
                head: partnerHeaders,
                body: partnerBody,
                startY: yPosition,
                styles: { fontSize: 9 },
                headStyles: { fillColor: [251, 191, 36] }
            });
        }
        
        // ========================================
        // PAGE 4: MATRICE (si pas trop de joueurs)
        // ========================================
        if (scheduler.numPlayers <= 20) {
            doc.addPage();
            yPosition = 20;
            
            doc.setFontSize(16);
            doc.setFont(undefined, 'bold');
            doc.text('Matrice des rencontres', 148, yPosition, { align: 'center' });
            
            yPosition += 15;
            
            const matriceHeaders = [['']];
            for (let p = 1; p <= scheduler.numPlayers; p++) {
                matriceHeaders[0].push(`J${p}`);
            }
            
            const matriceBody = [];
            for (let p1 = 1; p1 <= scheduler.numPlayers; p1++) {
                const row = [`J${p1}`];
                
                for (let p2 = 1; p2 <= scheduler.numPlayers; p2++) {
                    if (p1 === p2) {
                        row.push('-');
                    } else {
                        const partner = scheduler.partnerCount[p1][p2] || 0;
                        const opponent = scheduler.opponentCount[p1][p2] || 0;
                        
                        if (partner > 0) {
                            row.push(`P:${partner}`);
                        } else if (opponent > 0) {
                            row.push(`O:${opponent}`);
                        } else {
                            row.push('');
                        }
                    }
                }
                
                matriceBody.push(row);
            }
            
            doc.autoTable({
                head: matriceHeaders,
                body: matriceBody,
                startY: yPosition,
                styles: { fontSize: 7, cellPadding: 1 },
                headStyles: { fillColor: [30, 58, 138] }
            });
        }
        
        // ========================================
        // TÉLÉCHARGER LE PDF
        // ========================================
        const fileName = `Tournoi_${scheduler.numPlayers}joueurs_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        console.log('Export PDF terminé:', fileName);
        alert(`Fichier PDF téléchargé: ${fileName}`);
        
    } catch (error) {
        console.error('Erreur export PDF:', error);
        alert('Erreur lors de l\'export PDF: ' + error.message);
    }
}
