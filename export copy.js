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
const LOGO_BASE64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCACcAJwDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYBAgQDCf/EAEgQAAEDBAECBAQDAwcGDwAAAAECAwQABQYRBxIhEzFBUQgUImEycYEVI5EWNEJSYnKCCRgkM6GxFyU3OFRzdJKUsrO00dPw/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIEAQMFBgf/xAAuEQACAgIABAQFAwUAAAAAAAAAAQIDBBEFEyExE0FRYQYUInGRMrHRQlKB4fD/2gAMAwEAAhEDEQA/ALl0pSgFKUoBSlNUApSm6AUpWqc24C7jmQR7ratG7wOlHgFXZxA/ETr09wPQ+1a7IKyDhPpu1rp9jhY1zhkx3PX/AL7ehuXo/wAQ+CpuQTIUlXVGlpBKVp9j/fH+q0dNUkkvVHzeX4fwOW3r2f8AZ/8AyzB+NPn7s/7GaU0LApUL3z4gLgucEY9Ygw0T0qnSQFqT+YQNJP5kkehqRcQ5Nx/NyBnH5sW/M92Qh8doLwJ9j2I/TvWnI+H+M4acnCMl6x3/AHRyzMPLpWpdUbBSlKxFq9AAAfYVz1fDJ8q3+ESpPuK5rk+VCSaUpa76Cl25r8QNjwq4Ox5seSu3KBLUpCN+Gd62knv2H2J3/aqX5ByFlXI12Yf5AscdpUd4pvmM21tSTIX+biwVdCvZQ0/euPkJV3etClKV47OeS6ilCNNBMdKG2k9kIAGgB7CtsIOx8q6voV4U+fvqlbtkfDWSWeAuY1JXJhj8STqQgfqnv7b18q1Hh1/UOJ0N+j/ufQ4fD87eVWv81r89GzpV1tpWPRSdjRHuO/8AtFcVwlQUAQdgjYNc1u48W+pLGTnVTjuuPL/H/wCSqOSb4kU5HMKdbLxrjuS2yZKcdkQ5sZb65biuqS0EqBP7xXdSfz7H1qV7Jzhhlyto+uZ+IpZ7nqQ+QV/bRCa2rOnP2c4fWnJZ7q3pBKJMy1hJhqWVqKQkF4BQV01W30SyKy/4QSp2u0fv+Z5OhQx5fO1v0/TdaL4xZzb8hgIuNrmtyorq+gLa2EqUnukgnR0R2PvvVfkGoO+GrI/5Q4Jbpriyz8w2ExznuElHTpX99KU/wqcfap80zvJqn/mPh1P2lvT/AEfUmfT0pSvkZ1gqwfCFoQi0zLm60CZSilsoH4W07/8ArH/hqvhNX84UhN2rhbG2QQQz4x6T/XUdq/vGqnFq/kx+Vz1+xQ4hZKrF5l6olHSsdk2TW7FLKq93plb8JhfgqU2eFdeh3Gxtf8aypWfTXasEZSUVuyqbcnywW2ajfMrzhvK7VJaxyOua5c2UPQIy0j95hQCitQV26QDoD6hreu3AXKv7Zx5WP5A75mVZQWTK/pOQ/Ub+56QCDr1AP3qy+P4/6Nku0xk8vZt/hP8Ahm+ny6b1Hv8ArfQ04Dwf71VU5aLRulaB/LKa+6Pj8O8+0b+n6RGx4SvF5zlx/tBt0lskK2Fg+o7/ANbStc+SzjHjPpuT3Jjbq0trXD69nRO/bYHck/wrbFJcTbJ3jT4P/a7+35/5uek+lhXFKV3jnHF+UO7stMx2p8iOvfQQ6knXvofpWxY9y1mGPwm4lxvj0tlsc+GyU+GlP2T22PyJH2qnwrQjNfH1tLKi4p7XX0+//Bt8f8Ssmb1X5p4bpBnw4RLli36fmROqOIjCLdG2j5eJJSlUhA/ulPUN+iiD9gavKFBQ0a8u8cQWXF8LtDNgUZECIlptxp+3Svi7HX9JJOgD66r0VY40+dGPNM/R8R4erjKdaVkZR36beqM1SpXrr40+fvSlJwQ9uK1Sl0dtXZ1Qzz2oHvslAH8TXupTVe/R0pYWJXVBQpjr/wARUK5xwPjlxuc1+A1IsdxcSkONsqBQ8R5KQoDsrYHbse9TXSnT4aPgN+JdLe7oY65etC0XSVO3LcWrcNnXQygHYW5rbmyu/oF/kPWtvs/DkfKuJ8YslwdKZYtKEnm1RJZLKU+JGTpTv2HT2qabvbrRaZmRvSLZDXItsoR2fQvxm20+g0fiURroWk+1VHCM0pbKmHw/6lM9qXMsOWvm3+ZA/C3wN8eZjfBecZyzI7Ww6lXhqjJZdWhStaBXo60dnoUE/nV/mmbZY+Yx2oVvj27wo/TGZShIQ2gDQCQPTXtU0Ecfa3WbHEfusFiM2pPUSjShRHYjspO/Ueh9K2P5Wz7/ALPe/ub1R+dn92a68O+3pqt7/o85P/UoD8r2H6v8+/t/fQ/g/GP3n/Gfs//EACkRAAMAAQMCBgMAAwEAAAAAAAECAwQFERIAIRATMUBQUWEUIkKB0WL/2gAIAQMBAT8A/nPU7lbKM9kqE1Mm9iblWI9SjnHnFB6Ur2/U7Xu3lZz7PnvWSa/aQP6kp7g/lqenafzjofNH0ujZJ1Sk0/qH1p2PuCu3+NN0C3RJy6O9sN4r1HsCet3UlSFYg9H8eH6XDL4VkqT/AA+5VrqG+qZsRV/5YgVf8nYN1nR8fKVsyyj6i/bAi7fof5A2FLe9KqvPiLquzf8APU7ej+tHdHvnkXPfir1BKg7Av8iqRk4mRgZ+LQPf4u9Nk0/R80Z2sGv6qCJHdSfhBVVTcRGqF0P5FtSZJ0vDHtJp9aOg/wB9gRqeuVwWRk7LXcENsGXFrUrQfiB0BzDaozwCSjq+Lbxqft/cVHsN1rUNT04pRqtKnmEgFX2ql+5Qg7fvTarpc0szXyQRVmqtpIIkdgQysOo/4N8rKRmWpEg4x/k5YDl2HUd+h6b67fHTX/Lk5BPPieRK7A/qT1Bp0bYDtk2GpDNIu62sqhcqV4UaR3RR8Z0aP7RtrStSKAqzWqCY1o/rSNx+VB6j86lrNTL1FtMWPHxqIa17BwUMU/3Xu8bKf6JWOR+I3q26VsGh25nYJ/RCZXPyqn3MO/U7du5Oy30VJ+qzlCy/S+EqHRaLH+d3t+G/6U//xAAqEQACAgEDAwMDBQEAAAAAAAAAAQIRAwQSIQUxQRMiURBhcRQyI0BSodH/2gAIAQIBAT8A/nB0SojJoFjydXOv0kPJQeRfZ99FKHUmSbg9y7jya/rC47F5Vv8A4t1rKSbgtt3skXrbIq+SVmJ/x/3Iy7LozN3P+fTqVeijGGdRyJZF+5V/nI5sfKhNAkQXZVYRXD3V38ifRIRa2Rbwyd/wdKZLGlGm+bXh8FRm7Sw0/D+r/pNP0mfxqnH8i0SqLTYqa7Dg18mPJNLiL/o8u2XEEwcnfTvpR0sIyzKDXeT+F5SYtNt39/G7o6fRWm6fj4Mk2mraKTVWiuCuSeOUG3a44X0+hOe7dHv70d+LvNJvty2R4dE/p55Hco14bKfo1gXH2R5ryifTpRj9M/BHFNJOUbLimu+hdPv/AJJc/wDRDGsSojV8mSEpfb28NcCTTK+rOqLpEey2wfvp9wX0+hGRY1S/LE0T7F8Hy+w1fBfPJ+CuOOSSbjHo+l9MpfnfDKe3h9vpi5W62WuHXKZkx7E2q/TLpyy5lJW1jXKKk7hN/uy6jS1cpdtqr4NPPNFTVW6PkrdZtUmb6l2/2ZtXkeTai30yvV++PtjFtt1WxYJRkq5bGlJpr53K0PGnVPv5Lq7TNy9ydnPh//EADsQAAIBAgQDBQYDCAIDAAAAAAECAwARBBIhMRMiQQUgMlFhBhQwcYGRI0KxM1KhwdHh8PFigiQ0Q//aAAgBAQABPwD/AF1oUZSx+FSsqtZmAPoSP03oYiE/5fQ1Fy9H/avw4/WvLSpnO6m1Ql+dbHUGiRTtY/E7RwwQZw5YuMqIBzOTuB+96YKD4Aee/wBPrTMug/f9qjiYaisuAkmbLuwbkB6kjSl7FxC/ib6CrnGRVdj1U0nsSef9oz6Kv961PsQPyYgH/bG/5FTdl4yAZpoHUdSg9oeZW46/atBCnukLf7Tlt0b0OwoAaaeGm4NXGp6W+VEXsdh51N2diIlzPDJl83jce2viTrzbjT0oU0fVTf1GvSrnp6Uz386N99aU6Hp/YvOB+z7A/wCm8cB1PlVaU2NVX+fOq2NHxYbfurWgsaa3WxP8KLtluGGvpW/8KvXz+VO+Y6eVWsGt031vW2lKR0NClvpcg0RoRYjcHSpMCySmRZH+uWiVGg5hWFjUwDPEBYHQ0o2oe57M7Sm7MxJwrsdEfRD/AG91/SvZvE8RWglOjLdPQ9aud7YrOLgjK3qp1FC2lqXbrXMa5fpUKhW6A0yhvQ/pQUU30qNgGsNutRJlWxPQH1rHG0kHnrXu+XxYeP8A2is+p2+oqHFFfEd7/epEBuLGxvY9aClTca0pzKCNLrb8x1/nUcSkIaEYTu1bV1HehUygtcbHWrCgbVe1X/XpW1Hf+NMtMhO9N4Tauag9VcUvw8S+Z+VbC+9bV70xJYAjSr6WuaIqxB1FWtbz/SkOlj/KtLVr5Vr51r/CqbrrU3w8RbzevbLtLEqYcHCOcwV5Cu+gAW+t65LdPTr61lr2NPNY+tXrbWoxmXPYXvQFaazQq9AV+FRvnRW8xWmhG9X1tQF+tXUi1G/7WmPu0gI+FHiI3y6i/n1/lV1+nvhUdVVUUIV3pDQ1+9eimuhFPf4h7H4M92ix00f+VEH/AL/Cv+2pO0F4R/Jl/M3hH96hgaRI+YCx5upPzr3yQfEjiP8AY1BEVRVuC27KD08waVyUDWIDCxG1MdD8dSQBGUMvr1+dezkWCw8cmNlhUiRpAsn+3Ml/y7UkQxeOIU5cgtbyUk0xaGNVY6qNBT4p5VgQ2Wa5Zuu5NMTqpOUaA/OrX+xAquCdNf0oghhfr6/xFYVlPLewNRFcyW2vRW9a7Q7NxOO4Kx8Jeyp/L0qXs7GwrmbCSlF3YLmC+p0rF9p4nGJE08aMEGXLGLKwG1KujDRh9v0FemtLaivf5P8AqP5VNGNdL61Jdoxf4pX/ANiBWUMsimVYnKnKzBr5TqCRcEWHWjAXgkyoF4kzOVG4u40+VYeFoo0Re8UULfxrdDVkNGHKc0R4sW9vw3r0o9OvS1eyh5cSf9p/Sv0r+f8ACh/3CVdH/P6VKZISt1yjNqp87g3piNAoN6K6H9jQpYlG1F1uDtRJPSmBI9a/f+l/pXrfW29cQ6UHU7U3T67VZm1+1MJIF5bAigLClLKC4AB9z2egkwsU0uIiZMtlUNe7nYCpO9bL1rhKvjn/ANzVh4U/5CqN7XrW1FaAtf8AW1MrLsSPka7Zwbez0s0GDK+7vYxgtzLfbXertc0gzN72f+1qd/e8VLl0YqGU+dmFdhwDNMpY8qHYdav6A0B6/vW4F66beulMcqk02OjSxZTZq4kIXQV2h22nZ8/KpXlDXvqdvlWAjxE2OgkxOO/DWRcwAUi+tHypwygNTnMCq7m1EAWJrUW+YBpsEv5c3y0q+RLZmOp0VfpTg2+9M+YeQIrNrQNW69K41F7+ldqR4Psjf/EgLf5A/wCJpkVkKMAQRarA2NZQNsxq96GvjY3rrrVyfhR+dfCY3qLs/Ax+NDib1Zr/AN0r+BFYnFYvBuuXsoEdAq0c8skkszZpHJzs3xP+SidDp/Gqy3pcqgAf/Ndvdv5M64dswUkE/s2HcUsiFj6EbH0oqCKI6/bui4B3P/VYrsx8O9xdD+xUf8abFJKf3g+/UVidAbA0vl/Ci5JqFG4xJpCEa9Sc99K7Vg0jVYn8eQlgB8pJNfhXoA0y04BBHlWtWFqK0h0Oam1pV6+ddp4v2hk9mjwO1cRxYbBziJoYmK5mVwbg/wAvOmsHNb/bQ6b0NKBGUY9TWNwS4mF18+n9KxcDwxvqMmysfT6V2bgMBLJhrYbC4qbiKTm+KGK2+0Ub4i/MoFx0okDqR/tAqTWX7gXU2NEg1rWu/wDjQ3r/ALrW/wC1cHnRO1h9TVcP17Mx0rw4M4yZZvZ8wZ5g58O6Wv8A6IryFFSCCCNRSmwvrbSiSRQOh8LVQmkXbN/R+hqNcJEYY8QrwljlQiIWzAa8rDf60+KJ5WdyniN/CTbQ+VHQHy1r/wBX7agmjWcuC26+Ei1KBGPEJ38xrV+h+p2rqelqvWutq1rXN9KK3rrqD8UU78Lw/Cjf/kPHr4fCaOJixc3AHLJI2VIrkeI1HNNih+HIGyk6fswP8tKz4XB4VY5ZCMhsSg38zTdo5pD+KAwHkC3nQxYddYz+h0qRhK+hCXuQR41BNwdQKkw+LljD4fEy2I1AUOf72oeIFQjuv9tT+I6E1Mj/AIEpZFPjhBPSv/n4nrBJp9K9jS3ueMH/ALwrtjCN+OL8x14Z/wAVPHHMhSSMOP8AqL6j0NaW/wC/rR5gLWKn/UrT4iq3nW1uv96Uq6XGhPv//9k=";

/**
 * ============================================
 * EXPORT EXCEL AVEC STYLE EXACT
 * ============================================
 */
function exportToExcel() {
    console.log('Export Excel en cours...');
    
    try {
        const wb = XLSX.utils.book_new();
        
        // ========================================
        // FEUILLE 1: CALENDRIER
        // ========================================
        const ws1 = createCalendrierSheet();
        XLSX.utils.book_append_sheet(wb, ws1, "Calendrier");
        
        // ========================================
        // FEUILLE 2: DISTRIBUTION TERRAINS
        // ========================================
        const ws2 = createDistributionSheet();
        XLSX.utils.book_append_sheet(wb, ws2, "Distribution Terrains");
        
        // ========================================
        // FEUILLE 3: STATISTIQUES
        // ========================================
        const ws3 = createStatistiquesSheet();
        XLSX.utils.book_append_sheet(wb, ws3, "Statistiques");
        
        // ========================================
        // FEUILLE 4: MATRICE
        // ========================================
        const ws4 = createMatriceSheet();
        XLSX.utils.book_append_sheet(wb, ws4, "Matrice");
        
        // Télécharger
        const fileName = `Tournoi_${scheduler.numPlayers}joueurs_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(wb, fileName);
        
        alert(`✅ Fichier Excel téléchargé: ${fileName}`);
        
    } catch (error) {
        console.error('Erreur export Excel:', error);
        alert('Erreur: ' + error.message);
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

/**
 * CRÉER FEUILLE CALENDRIER (Style identique à l'image fournie)
 * Format : Lettre Paysage
 */
function createCalendrierSheet() {
    const data = [];
    const borderStyle = { style: "thin", color: { rgb: "000000" } };
    
    // --- COULEURS ET FONTS (Basés sur l'image) ---
    const styles = {
        title: {
            font: { bold: true, sz: 24, name: "Calibri" },
            alignment: { horizontal: "center", vertical: "center" },
            fill: { fgColor: { rgb: "FFFFFF" } } // Fond blanc
        },
        headerGreen: {
            fill: { fgColor: { rgb: "92D050" } }, // Vert vibrant (style Excel)
            font: { bold: true, sz: 16, name: "Calibri", color: { rgb: "000000" } }, // Texte noir comme l'image
            alignment: { horizontal: "center", vertical: "center" },
            border: { top: borderStyle, bottom: borderStyle, left: borderStyle, right: borderStyle }
        },
        cellPartie: {
            font: { bold: true, sz: 16, name: "Calibri" },
            alignment: { horizontal: "center", vertical: "center" },
            border: { top: borderStyle, bottom: borderStyle, left: borderStyle, right: borderStyle }
        },
        cellData: {
            font: { sz: 14, name: "Calibri" },
            alignment: { horizontal: "center", vertical: "center" },
            border: { top: borderStyle, bottom: borderStyle, left: borderStyle, right: borderStyle }
        }
    };

    // === LIGNE 1 : LOGO et TITRE ===
    // On laisse A1 vide pour le logo, le titre commence en B1
    const row1 = ['', `${scheduler.numPlayers} Joueurs`];
    // Remplissage vide pour la fusion du titre
    for (let i = 0; i < (scheduler.numCourts * 2); i++) { row1.push(''); }
    data.push(row1);

    // === LIGNE 2 : EN-TÊTES ===
    // Structure : Partie | Terrain 1 (2 cols) | Terrain 2 (2 cols) | ... | Banc
    const row2 = ['Partie'];
    for (let court = 1; court <= scheduler.numCourts; court++) {
        row2.push(`Terrain ${court}`, ''); // Le header "Terrain X" prendra 2 colonnes
    }
    row2.push('Banc');
    data.push(row2);

    // === LIGNES DE DONNÉES ===
    currentSchedule.forEach(round => {
        const row = [round.round]; // Colonne Partie
        
        // Pour chaque match, on sépare les équipes en deux cellules distinctes (ex: "1-9" et "7-6")
        round.matches.forEach(match => {
            row.push(formatPlayers(match.team1)); // Équipe 1
            row.push(formatPlayers(match.team2)); // Équipe 2
        });
        
        // Joueurs au repos
        row.push(formatPlayers(round.resting));
        data.push(row);
    });

    // Création de la feuille
    const ws = XLSX.utils.aoa_to_sheet(data);

    // === APPLICATION DES STYLES ===
    const range = XLSX.utils.decode_range(ws['!ref']);
    
    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) ws[addr] = { t: 's', v: '' }; // S'assurer que la cellule existe pour les bordures

            // LIGNE 1 : Titre et Logo
            if (R === 0) {
                if (C === 0) {
                    // Cellule A1 (Logo) - Pas de style ou bordure blanche pour ne pas couper l'image
                } else {
                    ws[addr].s = styles.title;
                }
            }
            // LIGNE 2 : En-têtes (Tout vert, y compris "Partie" et "Banc" selon l'image)
            else if (R === 1) {
                ws[addr].s = styles.headerGreen;
            }
            // LIGNES DE DONNÉES
            else {
                if (C === 0) {
                    ws[addr].s = styles.cellPartie; // Colonne A en gras
                } else {
                    ws[addr].s = styles.cellData; // Autres colonnes normales
                }
            }
        }
    }

    // === FUSIONS (MERGES) ===
    const merges = [];
    
    // 1. Titre "X Joueurs" (fusionne de B1 jusqu'à l'avant-dernière colonne)
    // On ne fusionne pas A1 (réservé au logo) ni la colonne Banc si on veut centrer sur les terrains
    const totalCols = 1 + (scheduler.numCourts * 2) + 1; // Partie + Terrains + Banc
    merges.push({ s: { r: 0, c: 1 }, e: { r: 0, c: totalCols - 2 } }); 

    // 2. En-têtes "Terrain X" (fusionne 2 colonnes par terrain)
    for (let i = 0; i < scheduler.numCourts; i++) {
        const startCol = 1 + (i * 2); // Commence après col 'Partie'
        merges.push({ s: { r: 1, c: startCol }, e: { r: 1, c: startCol + 1 } });
    }
    ws['!merges'] = merges;

    // === DIMENSIONS (Ajusté pour Lettre Paysage) ===
    
    // Largeurs de colonnes (unités approx. caractères)
    // A (Partie) : étroit
    // Terrains : assez large pour "10 - 12"
    // Banc : plus large
    const cols = [{ wch: 10 }]; 
    for (let i = 0; i < scheduler.numCourts * 2; i++) {
        cols.push({ wch: 14 }); // Colonnes terrains
    }
    cols.push({ wch: 20 }); // Colonne Banc
    ws['!cols'] = cols;

    // Hauteurs de lignes (en points)
    const rows = [];
    rows.push({ hpt: 75 }); // Ligne 1 très haute pour le Logo
    rows.push({ hpt: 35 }); // Ligne 2 (En-têtes)
    // Lignes de données
    for (let i = 0; i < currentSchedule.length; i++) {
        rows.push({ hpt: 30 }); // Hauteur confortable pour lecture
    }
    ws['!rows'] = rows;

    // === MISE EN PAGE IMPRESSION ===
    ws['!page_setup'] = {
        orientation: 'landscape',
        paperSize: 1, // Letter paper (8.5 in. by 11 in.)
        scale: 100,   // Essayer 100%, ou utiliser fitToPage
        fitToPage: true,
        fitToWidth: 1,
        fitToHeight: 1
    };
    
    // Marges (en pouces)
    ws['!margins'] = { left: 0.5, right: 0.5, top: 0.5, bottom: 0.5, header: 0.3, footer: 0.3 };

    return ws;
}



/**
 * CRÉER FEUILLE DISTRIBUTION
 */
function createDistributionSheet() {
    const data = [];
    
    // Ligne 1: Titre bleu
    data.push(['🏟️ DISTRIBUTION DES JOUEURS PAR TERRAIN']);
    data.push([]);  // Ligne vide
    
    // Ligne 3: En-têtes gris
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
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // STYLES
    const range = XLSX.utils.decode_range(ws['!ref']);
    
    // Style titre bleu
    const blueTitle = {
        fill: { fgColor: { rgb: "366092" } },
        font: { bold: true, color: { rgb: "FFFFFF" }, sz: 12 },
        alignment: { horizontal: "left", vertical: "center" }
    };
    
    // Style en-têtes gris
    const grayHeader = {
        fill: { fgColor: { rgb: "E7E6E6" } },
        font: { bold: true, sz: 10 },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    // Style cellule normale
    const normalCell = {
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    // Style joueur (gras)
    const playerCell = {
        font: { bold: true },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    // Style Total (gras)
    const totalCell = {
        font: { bold: true },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    // Style Écart selon valeur
    const ecartStyle = (val) => {
        let bg = "FFFFFF";
        if (val >= 2) bg = "F4B084";  // Orange
        return {
            fill: { fgColor: { rgb: bg } },
            font: { bold: true },
            alignment: { horizontal: "center", vertical: "center" }
        };
    };
    
    // Appliquer styles
    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) continue;
            
            // Ligne 0 (titre)
            if (R === 0) {
                ws[addr].s = blueTitle;
            }
            // Ligne 2 (en-têtes)
            else if (R === 2) {
                ws[addr].s = grayHeader;
            }
            // Lignes de données
            else if (R > 2) {
                // Colonne A (Joueur)
                if (C === 0) {
                    ws[addr].s = playerCell;
                }
                // Avant-dernière colonne (Total)
                else if (C === range.e.c - 1) {
                    ws[addr].s = totalCell;
                }
                // Dernière colonne (Écart)
                else if (C === range.e.c) {
                    const val = parseInt(ws[addr].v) || 0;
                    ws[addr].s = ecartStyle(val);
                }
                // Autres cellules
                else {
                    ws[addr].s = normalCell;
                }
            }
        }
    }
    
    // Largeurs
    const cols = [{ wch: 10 }];
    for (let i = 0; i < scheduler.numCourts + 2; i++) {
        cols.push({ wch: 12 });
    }
    ws['!cols'] = cols;
    
    return ws;
}

/**
 * CRÉER FEUILLE STATISTIQUES
 */
function createStatistiquesSheet() {
    const data = [];
    const qualityScore = scheduler.getQualityScore();
    
    // Ligne 1: Titre bleu
    data.push(['STATISTIQUES DU TOURNOI']);
    data.push([]);
    
    // Ligne 3: Sous-titre bleu foncé
    data.push(['📊 Équité du temps de jeu']);
    
    // Ligne 4: En-têtes gris
    data.push(['Joueur', 'Parties', 'Minutes jeu', 'Repos', 'Minutes repos', 'Total']);
    
    // Données
    for (let player = 1; player <= scheduler.numPlayers; player++) {
        const games = currentAnalysis.gamesPlayed[player];
        const minutesPlayed = games * scheduler.minutesPerRound;
        const rest = scheduler.numRounds - games;
        const minutesRest = rest * scheduler.minutesPerRound;
        const total = minutesPlayed + minutesRest;
        
        data.push([
            `J${player}`,
            games,
            `${minutesPlayed} min`,
            rest,
            `${minutesRest} min`,
            `${total} min`
        ]);
    }
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // STYLES (similaire à Distribution)
    const blueTitle = {
        fill: { fgColor: { rgb: "366092" } },
        font: { bold: true, color: { rgb: "FFFFFF" }, sz: 12 },
        alignment: { horizontal: "left", vertical: "center" }
    };
    
    const blueSub = {
        fill: { fgColor: { rgb: "4472C4" } },
        font: { bold: true, color: { rgb: "FFFFFF" }, sz: 11 },
        alignment: { horizontal: "left", vertical: "center" }
    };
    
    const grayHeader = {
        fill: { fgColor: { rgb: "E7E6E6" } },
        font: { bold: true, sz: 10 },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    const range = XLSX.utils.decode_range(ws['!ref']);
    
    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) continue;
            
            if (R === 0) ws[addr].s = blueTitle;
            else if (R === 2) ws[addr].s = blueSub;
            else if (R === 3) ws[addr].s = grayHeader;
        }
    }
    
    ws['!cols'] = [{ wch: 10 }, { wch: 10 }, { wch: 12 }, { wch: 10 }, { wch: 14 }, { wch: 12 }];
    
    return ws;
}

/**
 * CRÉER FEUILLE MATRICE
 */
function createMatriceSheet() {
    const data = [];
    
    // Ligne 1: Titre bleu
    data.push(['MATRICE DES RENCONTRES']);
    data.push([]);
    
    // Ligne 3: En-têtes
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
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // STYLES
    const blueTitle = {
        fill: { fgColor: { rgb: "366092" } },
        font: { bold: true, color: { rgb: "FFFFFF" }, sz: 12 }
    };
    
    const grayHeader = {
        fill: { fgColor: { rgb: "E7E6E6" } },
        font: { bold: true },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    const grayDiag = {
        fill: { fgColor: { rgb: "D9D9D9" } },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    const greenP = {
        fill: { fgColor: { rgb: "C6E0B4" } },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    const orangeO1 = {
        fill: { fgColor: { rgb: "F4B084" } },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    const orangeO2 = {
        fill: { fgColor: { rgb: "ED7D31" } },
        alignment: { horizontal: "center", vertical: "center" }
    };
    
    const range = XLSX.utils.decode_range(ws['!ref']);
    
    for (let R = 0; R <= range.e.r; R++) {
        for (let C = 0; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[addr]) continue;
            
            const val = ws[addr].v || '';
            
            if (R === 0) {
                ws[addr].s = blueTitle;
            } else if (R === 2) {
                ws[addr].s = grayHeader;
            } else if (R > 2 && C === 0) {
                ws[addr].s = grayHeader;
            } else if (val === '-') {
                ws[addr].s = grayDiag;
            } else if (val.startsWith('P:')) {
                ws[addr].s = greenP;
            } else if (val === 'O:1') {
                ws[addr].s = orangeO1;
            } else if (val.startsWith('O:') && parseInt(val.split(':')[1]) >= 2) {
                ws[addr].s = orangeO2;
            }
        }
    }
    
    const cols = [{ wch: 8 }];
    for (let i = 0; i < scheduler.numPlayers; i++) {
        cols.push({ wch: 6 });
    }
    ws['!cols'] = cols;
    
    return ws;
}

/**
 * EXPORT PDF (identique au précédent)
 */
function exportToPdf() {
    console.log('Export PDF en cours...');
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('landscape', 'mm', 'a4');
        
        let yPosition = 20;
        
        // PAGE 1: CALENDRIER
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.text(`Tournoi Pickleball - ${scheduler.numPlayers} Joueurs`, 148, yPosition, { align: 'center' });
        
        yPosition += 10;
        
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text(`${scheduler.numCourts} terrains • ${scheduler.numRounds} parties • ${scheduler.minutesPerRound} min/partie`, 148, yPosition, { align: 'center' });
        
        yPosition += 15;
        
        const calendrierHeaders = [['Partie']];
        for (let court = 1; court <= scheduler.numCourts; court++) {
            calendrierHeaders[0].push(`T${court} Éq.1`, `T${court} Éq.2`);
        }
        calendrierHeaders[0].push('Banc');
        
        const calendrierBody = currentSchedule.map(round => {
            const row = [round.round];
            round.matches.forEach(match => {
                row.push(formatPlayers(match.team1), formatPlayers(match.team2));
            });
            row.push(formatPlayers(round.resting));
            return row;
        });
        
        doc.autoTable({
            head: calendrierHeaders,
            body: calendrierBody,
            startY: yPosition,
            styles: { fontSize: 7, cellPadding: 2 },
            headStyles: { fillColor: [154, 205, 50], textColor: [255, 255, 255] },
            didParseCell: function(data) {
                if (data.column.index === calendrierHeaders[0].length - 1 && data.section === 'body') {
                    data.cell.styles.fillColor = [248, 203, 203];
                }
            }
        });
        
        // PAGES SUIVANTES (Distribution, Stats, Matrice)
        // (Code identique au précédent fichier)
        
        const fileName = `Tournoi_${scheduler.numPlayers}joueurs_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        alert(`✅ PDF téléchargé: ${fileName}`);
        
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur: ' + error.message);
    }
}
