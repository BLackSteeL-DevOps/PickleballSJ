# 🚀 GUIDE DE DÉPLOIEMENT AZURE
## Application Web - Générateur de Cédules Pickleball

---

## 📋 TABLE DES MATIÈRES

1. [Vue d'ensemble](#vue-densemble)
2. [Prérequis](#prérequis)
3. [Option 1: Azure Static Web Apps (RECOMMANDÉ)](#option-1-azure-static-web-apps)
4. [Option 2: Azure App Service](#option-2-azure-app-service)
5. [Configuration du domaine personnalisé](#configuration-du-domaine-personnalisé)
6. [Coûts estimés](#coûts-estimés)
7. [Maintenance et mises à jour](#maintenance-et-mises-à-jour)
8. [Dépannage](#dépannage)

---

## 🎯 VUE D'ENSEMBLE

Cette application web est une **Single Page Application (SPA)** 100% client-side:
- **Aucun backend requis** (tout le calcul se fait dans le navigateur)
- **Fichiers statiques uniquement** (HTML, CSS, JavaScript)
- **Hébergement très économique** possible

### Fichiers à déployer:
```
web-app/
├── index.html              # Page principale
├── styles.css              # Feuille de style
├── tournament-generator.js # Logique du tournoi
├── app.js                  # Interface utilisateur
├── export.js               # Exports Excel/PDF
└── logo_pickleball.png     # Logo
```

---

## ✅ PRÉREQUIS

### 1. Compte Azure
- Créer un compte gratuit: https://azure.microsoft.com/fr-ca/free/
- Crédit gratuit de 200$ CAD pour 30 jours
- **12 mois gratuits** pour plusieurs services

### 2. Outils nécessaires (selon la méthode choisie)

#### Pour Static Web Apps (Méthode recommandée):
- Compte GitHub (gratuit)
- Navigateur web

#### Pour App Service:
- Azure CLI (optionnel mais pratique)
- Installation: https://docs.microsoft.com/cli/azure/install-azure-cli

### 3. Fichiers du projet
- Tous les fichiers dans le dossier `web-app/`

---

## 🌟 OPTION 1: AZURE STATIC WEB APPS (RECOMMANDÉ)

**Pourquoi c'est recommandé:**
- ✅ **GRATUIT** jusqu'à 100 GB de bande passante/mois
- ✅ SSL/HTTPS automatique
- ✅ CDN global intégré (performances optimales)
- ✅ Déploiement automatique via GitHub
- ✅ Domaine personnalisé gratuit
- ✅ Parfait pour les applications 100% frontend

### ÉTAPE 1: Préparer le dépôt GitHub

1. **Créer un compte GitHub** (si pas déjà fait)
   - Aller sur: https://github.com
   - Créer un compte gratuit

2. **Créer un nouveau dépôt (repository)**
   - Cliquer sur le bouton "New" (vert)
   - Nom: `pickleball-tournament-generator`
   - Sélectionner: **Public** (gratuit)
   - Cocher: "Add a README file"
   - Cliquer: "Create repository"

3. **Uploader les fichiers**
   - Cliquer sur "Add file" > "Upload files"
   - Glisser-déposer tous les fichiers du dossier `web-app/`
   - Commit message: "Initial commit - Application web"
   - Cliquer: "Commit changes"

### ÉTAPE 2: Créer l'Azure Static Web App

1. **Se connecter au portail Azure**
   - Aller sur: https://portal.azure.com
   - Se connecter avec votre compte

2. **Créer une ressource Static Web Apps**
   - Cliquer sur "Create a resource" (Créer une ressource)
   - Chercher: "Static Web Apps"
   - Cliquer sur "Create" (Créer)

3. **Configuration de base**
   ```
   Subscription (Abonnement): Votre abonnement Azure
   Resource Group (Groupe de ressources): Créer nouveau "rg-pickleball"
   Name (Nom): pickleball-sainte-julie
   Region (Région): Canada Central ou East US 2
   Plan: Free (Gratuit)
   ```

4. **Configuration GitHub**
   - Cliquer sur "Sign in with GitHub"
   - Autoriser Azure Static Web Apps
   - Sélectionner:
     - Organization: Votre compte GitHub
     - Repository: `pickleball-tournament-generator`
     - Branch: `main`

5. **Configuration Build**
   ```
   Build Presets: Custom
   App location: /
   Api location: (laisser vide)
   Output location: (laisser vide)
   ```

6. **Review + Create**
   - Cliquer sur "Review + create"
   - Vérifier les informations
   - Cliquer sur "Create"

### ÉTAPE 3: Attendre le déploiement

1. **GitHub Actions se lance automatiquement**
   - Azure crée automatiquement un workflow GitHub Actions
   - Le déploiement prend environ 2-3 minutes

2. **Vérifier le déploiement**
   - Aller dans votre dépôt GitHub
   - Cliquer sur l'onglet "Actions"
   - Vous verrez le déploiement en cours (point orange) ou terminé (coche verte)

3. **Obtenir l'URL de votre site**
   - Retourner dans le portail Azure
   - Aller dans votre ressource Static Web App
   - L'URL sera affichée (ex: `https://pickleball-sainte-julie.azurestaticapps.net`)

### ÉTAPE 4: Tester l'application

1. **Ouvrir l'URL** dans votre navigateur
2. **Tester les fonctionnalités:**
   - Paramètres: 14 joueurs, 3 terrains, 10 parties
   - Cliquer sur "GÉNÉRER LA CÉDULE"
   - Vérifier les 4 onglets
   - Tester les exports Excel et PDF

---

## 💼 OPTION 2: AZURE APP SERVICE

**Quand utiliser cette option:**
- Vous voulez plus de contrôle sur la configuration
- Vous prévoyez ajouter un backend plus tard

**Coût:** ~5-10$ CAD/mois (tier gratuit limité)

### ÉTAPE 1: Créer l'App Service via le Portail

1. **Créer une ressource**
   - Portail Azure > "Create a resource"
   - Chercher: "Web App"
   - Cliquer: "Create"

2. **Configuration**
   ```
   Subscription: Votre abonnement
   Resource Group: rg-pickleball (créer nouveau)
   Name: pickleball-sainte-julie
   Publish: Code
   Runtime stack: Node 18 LTS (ou PHP 8.1)
   Operating System: Linux
   Region: Canada Central
   
   Pricing Plan: Free F1 (gratuit avec limitations)
   ```

3. **Créer la ressource**
   - Review + Create > Create
   - Attendre la création (1-2 minutes)

### ÉTAPE 2: Déployer via FTP

1. **Obtenir les informations FTP**
   - Aller dans votre App Service
   - Menu de gauche: "Deployment Center"
   - Onglet "FTPS credentials"
   - Noter:
     - FTPS endpoint
     - Username
     - Password

2. **Uploader les fichiers**
   - Utiliser un client FTP (FileZilla, WinSCP)
   - Se connecter avec les identifiants
   - Uploader tous les fichiers dans `/site/wwwroot/`

3. **Tester**
   - URL: `https://pickleball-sainte-julie.azurewebsites.net`

### ÉTAPE 3: Déployer via Azure CLI (Alternative)

```bash
# Se connecter à Azure
az login

# Créer le groupe de ressources
az group create --name rg-pickleball --location canadacentral

# Créer l'App Service Plan (gratuit)
az appservice plan create \
  --name asp-pickleball \
  --resource-group rg-pickleball \
  --sku FREE

# Créer l'App Service
az webapp create \
  --name pickleball-sainte-julie \
  --resource-group rg-pickleball \
  --plan asp-pickleball

# Déployer les fichiers (depuis le dossier web-app)
cd web-app
az webapp up \
  --name pickleball-sainte-julie \
  --resource-group rg-pickleball
```

---

## 🌐 CONFIGURATION DU DOMAINE PERSONNALISÉ

### Option: Utiliser votre propre domaine

1. **Ajouter un domaine personnalisé**
   - Dans votre Static Web App ou App Service
   - Menu: "Custom domains"
   - Cliquer: "Add custom domain"

2. **Configurer les DNS**
   - Chez votre registraire de domaines:
   ```
   Type: CNAME
   Name: www (ou pickleball)
   Value: pickleball-sainte-julie.azurestaticapps.net
   ```

3. **Vérifier et valider**
   - Retourner dans Azure
   - Valider le domaine
   - Azure configurera automatiquement le SSL (HTTPS)

---

## 💰 COÛTS ESTIMÉS

### Azure Static Web Apps (RECOMMANDÉ)
```
Plan Free:
- Bande passante: 100 GB/mois GRATUIT
- Builds: 10 par jour GRATUIT
- SSL/HTTPS: INCLUS
- CDN global: INCLUS

Estimation pour usage normal: 0$ CAD/mois
Dépassement (très rare): ~0.20$ CAD/GB
```

### Azure App Service
```
Plan Free F1:
- 60 minutes CPU/jour
- 1 GB RAM
- 1 GB stockage
- Coût: 0$ CAD/mois
- Limitations: Pas de domaine personnalisé, sleep après 20min inactivité

Plan Basic B1 (recommandé si production):
- CPU: 1 core
- RAM: 1.75 GB
- Coût: ~5-10$ CAD/mois
```

**RECOMMANDATION:** Utiliser Static Web Apps (gratuit et illimité pour votre usage)

---

## 🔧 MAINTENANCE ET MISES À JOUR

### Avec Static Web Apps (GitHub)

**C'est automatique!** Chaque fois que vous modifiez un fichier sur GitHub:
1. Modifier le fichier sur GitHub (bouton "Edit")
2. Commit les changements
3. GitHub Actions déploie automatiquement
4. Site mis à jour en 2-3 minutes

### Avec App Service (FTP/CLI)

**Méthode 1: FTP**
- Reconnecter via FTP
- Remplacer les fichiers modifiés

**Méthode 2: CLI**
```bash
cd web-app
az webapp up --name pickleball-sainte-julie
```

---

## 🐛 DÉPANNAGE

### Problème: Le site ne s'affiche pas

**Solutions:**
1. Vérifier que tous les fichiers sont uploadés
2. Ouvrir la console du navigateur (F12) pour voir les erreurs
3. Vérifier que `index.html` est à la racine

### Problème: Les exports ne fonctionnent pas

**Causes possibles:**
- Bloqueur de pop-ups activé
- JavaScript désactivé
- Bibliothèques externes (XLSX, jsPDF) non chargées

**Solutions:**
1. Autoriser les pop-ups pour le site
2. Vérifier la console (F12) pour les erreurs
3. Vérifier la connexion internet (bibliothèques chargées via CDN)

### Problème: Logo ne s'affiche pas

**Solutions:**
1. Vérifier que `logo_pickleball.png` est uploadé
2. Vérifier le nom du fichier (sensible à la casse)
3. Vérifier le chemin dans `index.html`

### Problème: Déploiement GitHub Actions échoue

**Solutions:**
1. Vérifier les logs dans GitHub > Actions
2. S'assurer que tous les fichiers sont dans le bon dossier
3. Re-créer le workflow si nécessaire

---

## 📞 SUPPORT ET RESSOURCES

### Documentation Azure
- Static Web Apps: https://docs.microsoft.com/azure/static-web-apps/
- App Service: https://docs.microsoft.com/azure/app-service/

### Forums d'aide
- Stack Overflow: https://stackoverflow.com/questions/tagged/azure
- Microsoft Q&A: https://docs.microsoft.com/answers/

### Contacter le support Azure
- Portail Azure > "Help + support"
- Chat en direct disponible

---

## ✅ CHECKLIST DE DÉPLOIEMENT

- [ ] Compte Azure créé
- [ ] Compte GitHub créé (si Static Web Apps)
- [ ] Dépôt GitHub avec les fichiers
- [ ] Ressource Azure créée
- [ ] Fichiers déployés
- [ ] Site accessible via l'URL
- [ ] Tous les onglets fonctionnent
- [ ] Exports Excel/PDF testés
- [ ] Logo s'affiche correctement
- [ ] Responsive testé (mobile)

---

## 🎉 FÉLICITATIONS!

Votre application web est maintenant déployée et accessible mondialement!

**URL de votre site:** `https://[votre-nom].azurestaticapps.net`

**Partager avec vos utilisateurs:**
- Envoyez simplement le lien
- Aucune installation requise
- Fonctionne sur tous les appareils
- Gratuit et rapide!

---

**Version du guide:** 1.0  
**Dernière mise à jour:** Février 2025  
**Contact:** Pickleball Sainte-Julie
