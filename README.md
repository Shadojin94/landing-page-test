# Landing Page Test - React + Express

Une landing page moderne avec formulaire de contact, construite avec React et Express.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18.x ou supérieur
- npm ou yarn

### Installation locale

```bash
# Cloner le projet
git clone https://github.com/Shadojin94/landing-page-test.git
cd landing-page-test

# Installer les dépendances
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..

# Lancer en développement
npm run dev
```

### Build pour la production

```bash
# Générer le build React
npm run build

# Lancer le serveur en production
npm start
```

## 📁 Structure du projet

```
landing-page-test/
├── client/                 # Application React
│   ├── src/
│   │   ├── components/     # Composants React
│   │   └── App.tsx         # Composant principal
│   └── package.json        # Dépendances React
├── server/                 # Serveur Express
│   ├── index.js           # Point d'entrée du serveur
│   └── package.json       # Dépendances Express
├── ecosystem.config.js    # Configuration PM2
└── package.json           # Scripts globaux
```

## 🛠️ Scripts disponibles

- `npm run dev` - Lancement en mode développement
- `npm run build` - Génération du build React
- `npm start` - Lancement en production
- `npm run client` - Lancement du client React seul
- `npm run server` - Lancement du serveur Express seul

## 🚀 Déploiement sur Plesk

### 1. Préparation
```bash
# Générer le build React
npm run build

# Le dossier client/build/ sera créé
```

### 2. Upload sur Plesk
Uploader sur votre serveur Plesk dans :
```
/var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/
```

**Fichiers à uploader :**
- `client/build/` (tout le dossier)
- `server/` (tout le dossier)
- `package.json` (racine)
- `ecosystem.config.js`

### 3. Configuration Plesk
- **Application Root**: `/httpdocs/landing-page-test`
- **Document Root**: `/httpdocs/landing-page-test`
- **Startup File**: `server/index.js`
- **Node.js Version**: 18.x ou supérieur

### 4. Installation et démarrage
```bash
# Dans le terminal Plesk
cd /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/
npm install

# Option 1: Démarrage avec PM2 (recommandé)
npm install -g pm2
pm2 start ecosystem.config.js

# Option 2: Démarrage simple
npm start
```

## 🔧 Configuration

### Variables d'environnement
Créer un fichier `server/.env` :
```env
PORT=3000
NODE_ENV=production
```

## 📞 Support

En cas de problème :
1. Vérifier les logs : `pm2 logs`
2. Consulter `PLESK_DEPLOYMENT_COMPLETE.md` pour le guide détaillé
3. Vérifier que le build existe : `ls -la client/build/index.html`

## 📝 Licence
MIT
