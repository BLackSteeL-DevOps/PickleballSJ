/**
 * ============================================
 * EXPORTS EXCEL ET PDF
 * Style EXACT du fichier tournoiPSJ.xlsx
 * ============================================
 * 
 * Couleurs:
 * - Calendrier: Vert #9ACD32 (en-têtes)
 * - Autres feuilles: Bleu #366092 (titre), Gris #E7E6E6 (en-têtes)
 * - Matrice: Vert #C6E0B4 (P:), Orange #F4B084 (O:1), Orange foncé #ED7D31 (O:2+)
 */

// Logo Pickleball (extrait du fichier original)
const LOGO_BASE64 = "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";

/**
 * ============================================
 * EXPORT EXCEL AVEC STYLE EXACT (PRO)
 * ============================================
 */
function exportToExcel() {
    console.log('Export Excel en cours...');

    try {
        // Création du classeur
        const wb = XLSX.utils.book_new();

        // 1. FEUILLE CALENDRIER
        const ws1 = createCalendrierSheet();
        XLSX.utils.book_append_sheet(wb, ws1, "Calendrier");

        // 2. FEUILLE DISTRIBUTION
        const ws2 = createDistributionSheet();
        XLSX.utils.book_append_sheet(wb, ws2, "Distribution");

        // 3. FEUILLE STATISTIQUES
        const ws3 = createStatistiquesSheet();
        XLSX.utils.book_append_sheet(wb, ws3, "Statistiques");

        // 4. FEUILLE MATRICE
        const ws4 = createMatriceSheet();
        XLSX.utils.book_append_sheet(wb, ws4, "Matrice");

        // Téléchargement
        const fileName = `Tournoi_${scheduler.numPlayers}joueurs_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);

        // Feedback utilisateur
        alert(`✅ Fichier Excel généré avec succès : ${fileName}`);

    } catch (error) {
        console.error('Erreur export Excel:', error);
        alert('Erreur lors de la création du fichier Excel: ' + error.message);
    }
}

/**
 * CRÉER FEUILLE CALENDRIER
 * Style: Ligne 1 fusionnée "X Joueurs", Ligne 2 en-têtes verts
 */
/* function createCalendrierSheet() {
    const data = [];
    
    // LIGNE 1: "14 Joueurs" (fusionné B1:G1, logo en A1)
    const row1 = ['', `${scheduler.numPlayers} Joueurs`];
    for (let i = 0; i < scheduler.numCourts * 2 - 1; i++) {
        row1.push('');
    }
    row1.push('');  // Colonne Banc
    data.push(row1);
    
    // LIGNE 2: En-têtes (Partie, Terrain 1, Terrain 2, etc., Banc)
    const row2 = ['Partie'];
    for (let court = 1; court <= scheduler.numCourts; court++) {
        row2.push(`Terrain ${court}`, '');  // 2 colonnes par terrain
    }
    row2.push('Banc');
    data.push(row2);
    
    // LIGNES DE DONNÉES
    currentSchedule.forEach(round => {
        const row = [round.round];
        
        round.matches.forEach(match => {
            row.push(formatPlayers(match.team1));
            row.push(formatPlayers(match.team2));
        });
        
        row.push(formatPlayers(round.resting));
        data.push(row);
    });
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // === STYLES ===
    const range = XLSX.utils.decode_range(ws['!ref']);
    
    // Style titre (ligne 1)
    const titleStyle = {
        font: { bold: true, sz: 12 },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    // Style en-têtes verts (ligne 2)
    const greenHeader = {
        fill: { fgColor: { rgb: "9ACD32" } },
        font: { bold: true, color: { rgb: "FFFFFF" }, sz: 11 },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        }
    };
    
    // Style cellules normales (blanc)
    const whiteCell = {
        fill: { fgColor: { rgb: "FFFFFF" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        }
    };
    
    // Style colonne "Partie" (gras)
    const partieStyle = {
        fill: { fgColor: { rgb: "FFFFFF" } },
        font: { bold: true },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        }
    };
    
    // Appliquer les styles
    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) continue;
            
            // Ligne 1 (titre)
            if (R === 0 && C >= 1) {
                ws[addr].s = titleStyle;
            }
            // Ligne 2 (en-têtes)
            else if (R === 1) {
                ws[addr].s = greenHeader;
            }
            // Colonne A (Partie)
            else if (C === 0 && R > 1) {
                ws[addr].s = partieStyle;
            }
            // Autres cellules
            else if (R > 1) {
                ws[addr].s = whiteCell;
            }
        }
    }
    
    // FUSIONS
    const merges = [];
    // Fusionner "X Joueurs" (B1:G1 ou selon nombre de terrains)
    const lastTitleCol = 1 + (scheduler.numCourts * 2) - 1;
    merges.push({ s: { r: 0, c: 1 }, e: { r: 0, c: lastTitleCol } });
    
    // Fusionner "Terrain X" (ligne 2)
    for (let court = 0; court < scheduler.numCourts; court++) {
        const startCol = 1 + (court * 2);
        merges.push({ s: { r: 1, c: startCol }, e: { r: 1, c: startCol + 1 } });
    }
    
    ws['!merges'] = merges;
    
    // Largeurs colonnes
    const cols = [{ wch: 8 }];  // Partie
    for (let i = 0; i < scheduler.numCourts * 2; i++) {
        cols.push({ wch: 12 });  // Terrains
    }
    cols.push({ wch: 25 });  // Banc
    ws['!cols'] = cols;
    
    // Hauteur ligne 1
    ws['!rows'] = [{ hpt: 20 }];
    
    // TODO: Ajouter le logo en A1
    // Note: xlsx-js-style a un support limité pour les images
    // Pour ajouter vraiment le logo, utiliser openpyxl côté serveur
    
    return ws;
} */
// --- STYLES COMMUNS ---
const commonStyles = {
    border: {
        top: { style: "thin", color: { rgb: "000000" } },
        bottom: { style: "thin", color: { rgb: "000000" } },
        left: { style: "thin", color: { rgb: "000000" } },
        right: { style: "thin", color: { rgb: "000000" } }
    },
    fontData: { name: "Calibri", sz: 11, alignment: { horizontal: "center", vertical: "center" } },
    fontHeader: { name: "Calibri", sz: 11, bold: true, alignment: { horizontal: "center", vertical: "center" } }
};

/**
 * 1. FEUILLE CALENDRIER (STYLE VERT UNIFIÉ)
 * Titre centré, écriture noire, police large partout, colonne "Partie" en vert.
 */
function createCalendrierSheet() {
    const data = [];
    const numCourts = scheduler.numCourts;
    const totalCols = 1 + (numCourts * 2) + 1; // Partie + (Terrains * 2) + Banc

    // --- 1. CONSTRUCTION DES DONNÉES ---
    
    // LIGNE 1 : Titre (Maintenant sur toute la largeur dès la colonne A)
    const titleRow = new Array(totalCols).fill('');
    titleRow[0] = `${scheduler.numPlayers} Joueurs`;
    data.push(titleRow);

    // LIGNE 2 : En-têtes
    const row2 = ['Partie'];
    for (let court = 1; court <= numCourts; court++) {
        row2.push(`Terrain ${court}`, ''); 
    }
    row2.push('Banc');
    data.push(row2);

    // DONNÉES
    currentSchedule.forEach(round => {
        const row = [round.round];
        round.matches.forEach(match => {
            row.push(formatPlayers(match.team1));
            row.push(formatPlayers(match.team2));
        });
        row.push(formatPlayers(round.resting));
        data.push(row);
    });

    const ws = XLSX.utils.aoa_to_sheet(data);
    const range = XLSX.utils.decode_range(ws['!ref']);

    // --- 2. CONFIGURATION DES STYLES ---
    
    const styleBoldBlack = {
        font: { bold: true, sz: 16, name: "Calibri", color: { rgb: "000000" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: commonStyles.border
    };

    const styleGreenFull = {
        ...styleBoldBlack,
        fill: { fgColor: { rgb: "9ACD32" } } // Vert pomme
    };

    // --- 3. APPLICATION DES STYLES VIA BOUCLE ---
    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) ws[addr] = { t: 's', v: '' };

            // Titre (Ligne 0), En-têtes (Ligne 1) et Colonne "Partie" (Col 0)
            if (R === 0 || R === 1 || C === 0) {
                ws[addr].s = styleGreenFull;
            } else {
                // Reste des données (Joueurs sur les terrains et banc)
                ws[addr].s = styleBoldBlack;
            }
        }
    }

    // --- 4. FUSIONS & DIMENSIONS ---
    const merges = [];
    // Titre fusionné sur TOUTE la largeur (A1 jusqu'à la fin)
    merges.push({ s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } });
    
    // Terrains fusionnés par paire
    for (let i = 0; i < numCourts; i++) {
        const start = 1 + (i * 2);
        merges.push({ s: { r: 1, c: start }, e: { r: 1, c: start + 1 } });
    }
    ws['!merges'] = merges;

    // Largeurs de colonnes (augmentées pour le sz: 16)
    const cols = [{ wch: 10 }]; // Colonne Partie
    for (let i = 0; i < numCourts * 2; i++) cols.push({ wch: 15 });
    cols.push({ wch: 25 }); // Colonne Banc
    ws['!cols'] = cols;

    // Hauteurs de lignes
    ws['!rows'] = [{ hpt: 40 }]; // Ligne de titre plus haute

    return ws;
}

/**
 * 2. FEUILLE DISTRIBUTION (COMPLÈTE)
 * Inclut: Titre fusionné, Ligne Total, Légende avec couleurs et fusions.
 */
function createDistributionSheet() {
    const data = [];
    
    // --- 1. PRÉPARATION DES DIMENSIONS ---
    const numCourts = scheduler.numCourts;
    const numPlayers = scheduler.numPlayers;
    const totalCols = numCourts + 3; // Colonnes: Joueur + Terrains + Total + Écart

    // --- 2. CONSTRUCTION DES DONNÉES (AOA) ---
    
    // Ligne 0: Titre principal (centré sur toute la largeur)
    const titleRow = new Array(totalCols).fill('');
    titleRow[0] = '🏟️ DISTRIBUTION DES JOUEURS PAR TERRAIN';
    data.push(titleRow);
    
    // Ligne 1: Vide pour l'espacement
    data.push([]); 
    
    // Ligne 2: En-têtes
    const headers = ['Joueur'];
    for (let i = 1; i <= numCourts; i++) headers.push(`Terrain ${i}`);
    headers.push('Total', 'Écart');
    data.push(headers);

    // Lignes 3+: Données des joueurs
    let totalPerCourt = new Array(numCourts).fill(0);
    let grandTotal = 0;

    for (let p = 1; p <= numPlayers; p++) {
        const row = [`J${p}`];
        const counts = [];
        for (let c = 1; c <= numCourts; c++) {
            const val = currentAnalysis.courtDistribution[p][c] || 0;
            counts.push(val);
            row.push(val);
            totalPerCourt[c-1] += val;
        }
        const total = counts.reduce((a, b) => a + b, 0);
        const ecart = Math.max(...counts) - Math.min(...counts);
        row.push(total, ecart);
        data.push(row);
        grandTotal += total;
    }

    // Ligne de résumé: TOTAL
    const summaryRow = ['TOTAL'];
    totalPerCourt.forEach(val => summaryRow.push(val));
    summaryRow.push(grandTotal, ''); 
    data.push(summaryRow);

    // Espace avant la légende
    data.push([]); 
    
    // Lignes de Légende
    data.push(['Légende des écarts:', '']); // Titre légende
    data.push(['0 = Parfait équilibre', '']);   // Ligne Vert
    data.push(['1 = Très bon équilibre', '']); // Ligne Jaune
    data.push(['2+ = À améliorer', '']);        // Ligne Orange

    // --- 3. CRÉATION DE LA FEUILLE ET STYLISATION ---
    const ws = XLSX.utils.aoa_to_sheet(data);
    const range = XLSX.utils.decode_range(ws['!ref']);
    const lastRow = range.e.r;

    // Définition des fusions (Merges)
    ws['!merges'] = [
        // Titre principal (A1 -> Dernière Colonne)
        { s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } },
        // Fusions du titre légende (A -> B pour chaque ligne de couleur)
        { s: { r: lastRow - 3, c: 0 }, e: { r: lastRow - 3, c: 1 } },
        // Fusions de la légende (A -> B pour chaque ligne de couleur)
        { s: { r: lastRow - 2, c: 0 }, e: { r: lastRow - 2, c: 1 } },
        { s: { r: lastRow - 1, c: 0 }, e: { r: lastRow - 1, c: 1 } },
        { s: { r: lastRow,     c: 0 }, e: { r: lastRow,     c: 1 } }
    ];

    // --- 4. BOUCLE DE STYLE PAR CELLULE ---
    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) continue;

            let cellStyle = {
                font: { sz: 11 },
                alignment: { vertical: "center", horizontal: "center" },
                border: {
                    top: {style: "thin"}, bottom: {style: "thin"},
                    left: {style: "thin"}, right: {style: "thin"}
                }
            };

            // Style Titre Principal (Ligne 0)
            if (R === 0) {
                cellStyle = {
                    fill: { fgColor: { rgb: "366092" } },
                    font: { bold: true, color: { rgb: "FFFFFF" }, sz: 14 },
                    alignment: { horizontal: "center", vertical: "center" },
                    border: { bottom: {style: "thick"} }
                };
            }
            // Style En-têtes (Ligne 2)
            else if (R === 2) {
                cellStyle.fill = { fgColor: { rgb: "E7E6E6" } };
                cellStyle.font = { bold: true };
            }
            // Style Données et Ligne TOTAL
            else if (R > 2 && R <= (2 + numPlayers + 1)) {
                const isTotalRow = (R === 2 + numPlayers + 1);
                const isEcartCol = (C === range.e.c);

                if (isTotalRow) {
                    cellStyle.font = { bold: true };
                    cellStyle.fill = { fgColor: { rgb: "F2F2F2" } };
                }

                // Couleur conditionnelle pour la colonne Écart
                if (isEcartCol && !isTotalRow) {
                    const val = parseInt(ws[addr].v);
                    if (val === 0) cellStyle.fill = { fgColor: { rgb: "C6E0B4" } }; // Vert
                    else if (val === 1) cellStyle.fill = { fgColor: { rgb: "FFE699" } }; // Jaune
                    else if (val >= 2) cellStyle.fill = { fgColor: { rgb: "F4B084" } }; // Orange
                }
            }
            // Style Légende (3 dernières lignes colorées)
            else if (R > range.e.r - 3) {
                cellStyle.alignment = { horizontal: "left" };
                if (C === 0 || C === 1) {
                    if (R === lastRow - 2) cellStyle.fill = { fgColor: { rgb: "C6E0B4" } };
                    if (R === lastRow - 1) cellStyle.fill = { fgColor: { rgb: "FFE699" } };
                    if (R === lastRow)     cellStyle.fill = { fgColor: { rgb: "F4B084" } };
                }
            } else {
                // Pour les lignes vides ou le titre de la légende
                cellStyle.border = {}; 
                cellStyle.alignment = { horizontal: "left" };
            }

            ws[addr].s = cellStyle;
        }
    }

    // Ajustement des largeurs de colonnes
    const colWidths = [{ wch: 12 }]; // Col Joueur
    for (let i = 0; i < numCourts; i++) colWidths.push({ wch: 10 }); // Terrains
    colWidths.push({ wch: 10 }, { wch: 10 }); // Total et Écart
    ws['!cols'] = colWidths;

    return ws;
}
/**
 * 3. FEUILLE STATISTIQUES
 * Style: Bleu et Gris
 */
function createStatistiquesSheet() {
    const data = [];
    
    // Ligne 1 : Titre principal
    data.push(['STATISTIQUES DE LA CÉDULE', '', '', '', '', '']); // On remplit de vides pour la fusion
    data.push([]); // Ligne vide
    
    // Ligne 3 : Sous-titre Équité
    data.push(['📊 Équité du temps de jeu', '', '', '', '', '']); 
    data.push(['Joueur', 'Parties', 'Minutes jeu', 'Repos', 'Minutes repos', 'Total']);

    for (let p = 1; p <= scheduler.numPlayers; p++) {
        const games = currentAnalysis.gamesPlayed[p];
        const minPlay = games * scheduler.minutesPerRound;
        const rest = scheduler.numRounds - games;
        const minRest = rest * scheduler.minutesPerRound;
        data.push([`J${p}`, games, minPlay, rest, minRest, minPlay + minRest]);
    }

    const ws = XLSX.utils.aoa_to_sheet(data);
    const range = XLSX.utils.decode_range(ws['!ref']);

    const styleBlueTitle = { fill: { fgColor: { rgb: "366092" } }, font: { bold: true, color: { rgb: "FFFFFF" }, sz: 14 }, alignment: { horizontal: "center" } };
    const styleSubTitle = { fill: { fgColor: { rgb: "4472C4" } }, font: { bold: true, color: { rgb: "FFFFFF" } }, alignment: { horizontal: "center" } };
    const styleGrayHeader = { fill: { fgColor: { rgb: "E7E6E6" } }, font: { bold: true }, border: commonStyles.border, alignment: { horizontal: "center" } };

    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) continue;

            if (R === 0) ws[addr].s = styleBlueTitle;
            else if (R === 2) ws[addr].s = styleSubTitle;
            else if (R === 3) ws[addr].s = styleGrayHeader;
            else if (R > 3) ws[addr].s = { border: commonStyles.border, alignment: { horizontal: "center" } };
        }
    }

    // --- 1. FUSION DES CELLULES (MERGES) ---
    // s = start, e = end | r = row, c = col (index 0)
    ws['!merges'] = [
        // Fusionne la ligne 1 (A1 à F1)
        { s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }, 
        // Fusionne la ligne 3 (A3 à F3)
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }
    ];

// --- 2. LARGEUR DES COLONNES (COLS) ---
    // On définit une largeur suffisante pour que le texte ne soit pas coupé
    ws['!cols'] = [
        { wch: 15 }, // Colonne A (Joueur)
        { wch: 10 }, // Colonne B (Parties)
        { wch: 15 }, // Colonne C (Minutes jeu)
        { wch: 10 }, // Colonne D (Repos)
        { wch: 15 }, // Colonne E (Minutes repos)
        { wch: 12 }  // Colonne F (Total)
    ];

    return ws;
}

/**
 * 4. FEUILLE MATRICE (COMPLÈTE)
 * Titre fusionné, Grille JxJ, et Légende sur 5 cellules de large
 */
function createMatriceSheet() {
    const data = [];
    const numPlayers = scheduler.numPlayers;
    const totalCols = numPlayers + 1;

    // --- 1. DONNÉES ---
    const titleRow = new Array(totalCols).fill('');
    titleRow[0] = '⚔️ MATRICE DES RENCONTRES';
    data.push(titleRow);
    data.push([]); 
    
    const headers = [''];
    for (let p = 1; p <= numPlayers; p++) headers.push(`J${p}`);
    data.push(headers);

    for (let p1 = 1; p1 <= numPlayers; p1++) {
        const row = [`J${p1}`];
        for (let p2 = 1; p2 <= numPlayers; p2++) {
            if (p1 === p2) row.push('-');
            else {
                const partner = scheduler.partnerCount[p1][p2] || 0;
                const opponent = scheduler.opponentCount[p1][p2] || 0;
                if (partner > 0) row.push(`P:${partner}`);
                else if (opponent > 0) row.push(`O:${opponent}`);
                else row.push('');
            }
        }
        data.push(row);
    }

    data.push([]); // Espace
    
    // Légende (Texte dans la première cellule, fusionnée ensuite sur 5)
    data.push(['P:1 = Partenaire 1 fois', '', '', '', '']);
    data.push(['P:2+ = Partenaire multiple fois', '', '', '', '']);
    data.push(['O:1 = Adversaire 1 fois', '', '', '', '']);
    data.push(['O:2+ = Adversaire multiple fois', '', '', '', '']);

    const ws = XLSX.utils.aoa_to_sheet(data);
    const range = XLSX.utils.decode_range(ws['!ref']);
    const lastRow = range.e.r;

    // --- 2. FUSIONS (Titre + Légende A à E) ---
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: totalCols - 1 } },
        { s: { r: lastRow - 3, c: 0 }, e: { r: lastRow - 3, c: 4 } },
        { s: { r: lastRow - 2, c: 0 }, e: { r: lastRow - 2, c: 4 } },
        { s: { r: lastRow - 1, c: 0 }, e: { r: lastRow - 1, c: 4 } },
        { s: { r: lastRow,     c: 0 }, e: { r: lastRow,     c: 4 } }
    ];

    // --- 3. STYLES ---
    const stylePartner1 = { fill: { fgColor: { rgb: "C6E0B4" } }, border: commonStyles.border };
    const stylePartner2 = { fill: { fgColor: { rgb: "A9D08E" } }, border: commonStyles.border, font: { bold: true } };
    const styleOpp1 = { fill: { fgColor: { rgb: "F4B084" } }, border: commonStyles.border };
    const styleOpp2 = { fill: { fgColor: { rgb: "ED7D31" } }, border: commonStyles.border, font: { bold: true, color: { rgb: "FFFFFF" } } };

    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) continue;

            let cellStyle = {
                alignment: { horizontal: "center", vertical: "center" },
                border: commonStyles.border
            };

            // Titre
            if (R === 0) {
                cellStyle = {
                    fill: { fgColor: { rgb: "366092" } },
                    font: { bold: true, color: { rgb: "FFFFFF" }, sz: 14 },
                    alignment: { horizontal: "center" }
                };
            }
            // En-têtes
            else if (R === 2 || (C === 0 && R > 2 && R <= 2 + numPlayers)) {
                cellStyle.fill = { fgColor: { rgb: "E7E6E6" } };
                cellStyle.font = { bold: true };
            }
            // Matrice
            else if (R > 2 && R <= 2 + numPlayers) {
                const val = ws[addr].v;
                if (val === '-') cellStyle.fill = { fgColor: { rgb: "D9D9D9" } };
                else if (val === 'P:1') cellStyle.fill = stylePartner1.fill;
                else if (val.toString().startsWith('P:')) { cellStyle.fill = stylePartner2.fill; cellStyle.font = stylePartner2.font; }
                else if (val === 'O:1') cellStyle.fill = styleOpp1.fill;
                else if (val.toString().startsWith('O:')) { cellStyle.fill = styleOpp2.fill; cellStyle.font = styleOpp2.font; }
            }
            // Légende (Correctif pour les 5 cellules)
            else if (R > range.e.r - 4) {
                if (C >= 0 && C <= 4) { 
                    cellStyle.alignment = { horizontal: "left" };
                    if (R === lastRow - 3) cellStyle.fill = stylePartner1.fill;
                    if (R === lastRow - 2) cellStyle.fill = stylePartner2.fill;
                    if (R === lastRow - 1) cellStyle.fill = styleOpp1.fill;
                    if (R === lastRow) { 
                        cellStyle.fill = styleOpp2.fill; 
                        cellStyle.font = { color: { rgb: "FFFFFF" }, bold: true }; 
                    }
                } else {
                    cellStyle.border = {}; // Enlever bordure hors zone A-E
                }
            } else if (R === 1 || R === 2 + numPlayers + 1) {
                cellStyle.border = {}; // Lignes vides
            }

            ws[addr].s = cellStyle;
        }
    }

    ws['!cols'] = [{ wch: 8 }, ...new Array(numPlayers).fill({ wch: 5 })];
    return ws;
}
/**
 * ============================================
 * EXPORT PDF "IDENTIQUE AU SITE" (VISUEL)
 * ============================================
 */
async function exportToPdf() {
    console.log('📸 Début de la capture PDF...');
    
    // Feedback pour l'utilisateur car ça peut prendre 2-3 secondes
    const btn = document.getElementById('exportPdfBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ Génération...';
    btn.disabled = true;

    try {
        const { jsPDF } = window.jspdf;
        // Création d'un PDF en mode Paysage (Landscape), unité mm, format A4
        const doc = new jsPDF('l', 'mm', 'a4');
        
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        
        // --- 1. PRÉPARATION DES ÉLÉMENTS ---
        // On doit rendre visible tous les onglets et les détails pour les capturer
        // On clone les éléments dans un conteneur temporaire pour ne pas casser l'interface actuelle
        
        const exportContainer = document.createElement('div');
        exportContainer.id = 'pdf-export-zone';
        // On le place hors écran mais visible pour le moteur de rendu
        exportContainer.style.position = 'absolute';
        exportContainer.style.left = '-9999px';
        exportContainer.style.top = '0';
        exportContainer.style.width = '1400px'; // Largeur fixe pour assurer une bonne mise en page
        exportContainer.style.backgroundColor = 'white';
        exportContainer.style.padding = '20px';
        document.body.appendChild(exportContainer);

        // --- 2. CAPTURE DES SECTIONS ---
        
        // A. CALENDRIER
        await addSectionToPdf(doc, 'calendrierContent', '📅 CALENDRIER DES MATCHS', exportContainer, false);
        
        // B. DISTRIBUTION
        doc.addPage();
        await addSectionToPdf(doc, 'distributionContent', '🏟️ DISTRIBUTION DES TERRAINS', exportContainer, false);

        // C. STATISTIQUES (Avec tous les détails ouverts !)
        doc.addPage();
        // Pour les stats, on passe "true" pour forcer l'ouverture des détails
        await addSectionToPdf(doc, 'statistiquesContent', '📊 STATISTIQUES DÉTAILLÉES', exportContainer, true);

        // D. MATRICE
        doc.addPage();
        await addSectionToPdf(doc, 'matriceContent', '⚔️ MATRICE DES RENCONTRES', exportContainer, false);

        // --- 3. SAUVEGARDE ---
        const fileName = `Tournoi_Complet_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        // Nettoyage
        document.body.removeChild(exportContainer);
        alert(`✅ PDF complet généré : ${fileName}`);

    } catch (error) {
        console.error('Erreur PDF:', error);
        alert('Erreur: ' + error.message);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

/**
 * Fonction auxiliaire pour capturer une section
 */
async function addSectionToPdf(doc, sourceId, title, container, expandDetails) {
    // 1. Cloner le contenu
    const source = document.getElementById(sourceId);
    const clone = source.cloneNode(true);
    
    // Nettoyer le clone (enlever display:none si l'onglet était caché)
    clone.style.display = 'block';
    clone.classList.add('active'); // S'assurer que les classes CSS s'activent
    
    // Si c'est la section stats, on force l'affichage des détails
    if (expandDetails) {
        const details = clone.querySelectorAll('.stat-detail-panel');
        details.forEach(el => {
            el.style.display = 'block'; // Force l'affichage
            el.style.opacity = '1';
            el.style.marginTop = '15px';
            el.style.borderTop = '2px dashed #ccc';
        });
        
        // On enlève les curseurs "main" car ce n'est plus cliquable sur le PDF
        const cards = clone.querySelectorAll('.stat-card');
        cards.forEach(c => c.style.cursor = 'default');
    }

    // Ajouter un titre visuel pour le PDF
    const titleEl = document.createElement('h1');
    titleEl.innerText = title;
    titleEl.style.fontFamily = 'Arial, sans-serif';
    titleEl.style.color = '#333';
    titleEl.style.borderBottom = '3px solid #4CAF50';
    titleEl.style.paddingBottom = '10px';
    titleEl.style.marginBottom = '20px';
    
    // Vider le conteneur et ajouter le titre + contenu
    container.innerHTML = '';
    container.appendChild(titleEl);
    container.appendChild(clone);

    // 2. Prendre la photo (Canvas)
    const canvas = await html2canvas(container, {
        scale: 2, // Meilleure qualité (2x)
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff' // Fond blanc forcé
    });

    // 3. Ajouter l'image au PDF
    const imgData = canvas.toDataURL('image/png');
    
    // Calculs de dimension pour faire tenir dans la page A4
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;
    
    const imgWidth = pageWidth - (margin * 2);
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Si l'image est plus haute que la page, on devra gérer (pour l'instant on réduit si besoin)
    // Pour un rapport simple, on ajoute l'image en haut
    doc.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
}
