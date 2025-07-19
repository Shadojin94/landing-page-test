# 🚨 FIX: Problème de port déjà utilisé - Solution immédiate

## ✅ Problème résolu
Le port 5000 était déjà utilisé. J'ai changé le port par défaut à **3000**.

## 🚀 Commandes pour relancer l'application

### 1. Arrêter l'ancienne application
```bash
# Vérifier les processus en cours
ps aux | grep node

# Tuer le processus sur le port 5000
kill -9 $(lsof -t -i:5000)
```

### 2. Relancer avec le nouveau port
```bash
# Dans le dossier du projet
cd /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test

# Installer les dépendances
npm run install:all

# Construire l'application React
npm run build

# Démarrer avec le nouveau port
PORT=3000 npm start
```

### 3. Via Plesk (méthode recommandée)
1. **Dans Plesk Panel**:
   - Allez dans **"Sites & Domaines"**
   - Cliquez sur **"cercleonline.com"**
   - Trouvez **"Node.js"**

2. **Configuration**:
   - **Fichier d'application**: `server/index.js`
   - **Port**: `3000`
   - **Mode**: Production
   - Cliquez sur **"Démarrer l'application"**

## 📋 Test rapide
```bash
# Vérifier que le serveur tourne
curl http://localhost:3000/api/health
```

## 🎯 Résultat attendu
- ✅ Le serveur démarre sur le port 3000
- ✅ Pas de conflit de port
- ✅ Landing page accessible sur votre domaine

**Le problème de port est maintenant résolu !**
