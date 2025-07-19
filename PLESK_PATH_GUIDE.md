# 📍 Guide des chemins Plesk - Chemin vers le répertoire web

## 🏠 **Chemin complet vers votre site web sur Plesk**

### **Chemin standard Plesk** :
```
/var/www/vhosts/cercleonline.com/httpdocs/
```

### **Structure détaillée** :
```
/var/www/vhosts/
└── cercleonline.com/
    ├── httpdocs/           # ← Votre site web ici
    │   ├── index.html
    │   ├── server/
    │   ├── client/
    │   └── package.json
    ├── logs/
    ├── conf/
    └── ssl/
```

## 🚀 **Commandes pour votre VPS Plesk**

### **1. Accéder au dossier web** :
```bash
# Se connecter en SSH
ssh votre-utilisateur@cercleonline.com

# Aller dans le dossier web
cd /var/www/vhosts/cercleonline.com/httpdocs
```

### **2. Cloner le projet** :
```bash
# Dans le dossier httpdocs
git clone https://github.com/Shadojin94/landing-page-test.git .
```

### **3. Structure finale** :
```
/var/www/vhosts/cercleonline.com/httpdocs/
├── client/          # React app
├── server/          # Node.js backend
├── package.json     # Scripts principaux
├── server/index.js  # Point d'entrée Node.js
└── client/build/    # Build React (après npm run build)
```

## 📋 **Commandes Plesk essentielles**

### **Installation** :
```bash
# Dans /var/www/vhosts/cercleonline.com/httpdocs
npm run install:all
npm run build
npm start
```

### **Vérification** :
```bash
# Vérifier que le serveur tourne
curl http://localhost:3000/api/health

# Voir les logs
tail -f /var/www/vhosts/cercleonline.com/logs/access_log
```

## 🎯 **Configuration Plesk Node.js**

### **Dans Plesk Panel** :
1. **Sites & Domaines** → **cercleonline.com**
2. **Node.js** → **Paramètres**
3. **Application root**: `/httpdocs`
4. **Application startup file**: `server/index.js`
5. **Port**: `3000`

## 📁 **Fichiers importants** :
- **Point d'entrée**: `/var/www/vhosts/cercleonline.com/httpdocs/server/index.js`
- **Build React**: `/var/www/vhosts/cercleonline.com/httpdocs/client/build/`
- **Logs**: `/var/www/vhosts/cercleonline.com/logs/`

**Votre landing page sera accessible sur**: `https://cercleonline.com`
