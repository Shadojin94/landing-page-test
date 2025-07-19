# 🚀 Guide de Déploiement Plesk - Étape par Étape

Ce guide vous explique comment déployer votre landing page React + Node.js sur votre VPS Plesk.

## 📋 Prérequis
- Accès à votre Plesk Panel
- Node.js installé sur votre VPS (v16+)
- Accès SSH à votre serveur

## 🔧 Étape 1: Préparer votre projet

### 1.1 Créer le repository GitHub
```bash
# Sur votre ordinateur local
git remote add origin https://github.com/Shadojin94/landing-page-test.git
git branch -M main
git push -u origin main
```

### 1.2 Sur votre VPS (via SSH)
```bash
# Se connecter à votre VPS
ssh votre-utilisateur@votre-domaine.com

# Aller dans le dossier de votre site
cd /var/www/vhosts/votre-domaine.com/httpdocs

# Cloner le projet
git clone https://github.com/Shadojin94/landing-page-test.git .
```

## 🛠️ Étape 2: Installation sur Plesk

### 2.1 Installer les dépendances
```bash
# Installer toutes les dépendances
npm run install:all

# Construire l'application React
npm run build
```

### 2.2 Configurer Node.js dans Plesk
1. **Dans Plesk Panel**:
   - Allez dans **"Sites & Domaines"**
   - Cliquez sur votre domaine
   - Trouvez **"Node.js"** dans les paramètres

2. **Configuration Node.js**:
   - **Mode d'application**: Production
   - **Fichier d'application**: `server/index.js`
   - **Document racine**: `/httpdocs`
   - **Variables d'environnement**:
     ```
     NODE_ENV=production
     PORT=3000
     ```

## ⚙️ Étape 3: Démarrer l'application

### 3.1 Méthode 1: Via Plesk (Recommandé)
1. Dans **Node.js** settings:
   - Cliquez sur **"Activer Node.js"**
   - Cliquez sur **"Démarrer l'application"**
   - L'application tournera sur le port configuré

### 3.2 Méthode 2: Avec PM2 (Alternative)
```bash
# Installer PM2 globalement
npm install -g pm2

# Démarrer l'application
pm2 start ecosystem.config.js --env production

# Sauvegarder la configuration PM2
pm2 save
pm2 startup
```

## 🔍 Étape 4: Vérifier le déploiement

### 4.1 Tester l'application
- Ouvrez votre navigateur
- Allez sur `https://votre-domaine.com`
- La landing page devrait apparaître

### 4.2 Tester le formulaire de contact
- Remplissez le formulaire de contact
- Vérifiez que vous recevez les emails

## 🚨 Dépannage

### Problème: "Port déjà utilisé"
- Changez le port dans Plesk Node.js settings
- Ou utilisez un port différent dans `.env`

### Problème: "Application ne démarre pas"
```bash
# Vérifier les logs
pm2 logs landing-page

# Ou via Plesk
# Aller dans Node.js > Logs
```

### Problème: "Build échoue"
```bash
# Nettoyer et reconstruire
cd client
npm run build
```

## 📧 Configuration Email (Optionnel)

Pour le formulaire de contact, créez un fichier `.env` dans le dossier `server/`:

```env
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
EMAIL_TO=contact@votre-domaine.com
```

## 🎯 Résumé des commandes essentielles

```bash
# Sur votre VPS
cd /var/www/vhosts/votre-domaine.com/httpdocs
git pull origin main
npm run install:all
npm run build
npm start
```

## 📞 Support

Si vous avez des problèmes:
1. Vérifiez les logs dans Plesk
2. Assurez-vous que Node.js est bien installé
3. Testez localement avant de déployer

**Votre landing page est maintenant prête à être déployée sur Plesk !**
