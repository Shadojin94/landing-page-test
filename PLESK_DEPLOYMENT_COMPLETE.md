# Guide de Déploiement Complet - Landing Page React + Express sur Plesk

## ✅ État Actuel
- ✅ Build React généré avec succès dans `client/build/`
- ✅ Serveur Express configuré correctement
- ✅ Tous les fichiers prêts pour le déploiement

## 📁 Structure des Fichiers
```
landing-page-test/
├── client/build/          # ✅ Build React généré
│   ├── index.html
│   ├── static/
│   └── ...
├── server/
│   ├── index.js          # ✅ Configuré pour servir client/build
│   ├── package.json
│   └── .env
├── package.json          # ✅ Scripts de déploiment
└── ecosystem.config.js   # ✅ Configuration PM2
```

## 🚀 Étapes de Déploiement sur Plesk

### 1. Préparation des fichiers
Les fichiers suivants doivent être uploadés sur le serveur Plesk dans `/var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/` :

**Fichiers obligatoires :**
- `client/build/` (tout le dossier)
- `server/` (tout le dossier)
- `package.json` (racine)
- `ecosystem.config.js`

### 2. Configuration Plesk

#### 2.1 Upload des fichiers
```bash
# Via SSH ou File Manager Plesk
cd /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/
```

#### 2.2 Configuration Node.js dans Plesk
- **Application Root**: `/httpdocs/landing-page-test`
- **Document Root**: `/httpdocs/landing-page-test`
- **Startup File**: `server/index.js`
- **Node.js Version**: 18.x ou supérieur

#### 2.3 Installation des dépendances
```bash
# Dans Plesk Terminal ou via SSH
cd /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/
npm install
```

#### 2.4 Configuration des variables d'environnement
Créer le fichier `/var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/server/.env` :
```env
PORT=3000
NODE_ENV=production
```

### 3. Scripts de démarrage

#### 3.1 Via PM2 (Recommandé)
```bash
# Installation globale de PM2
npm install -g pm2

# Démarrage de l'application
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 3.2 Via npm start
```bash
npm start
```

### 4. Vérification du déploiement

#### 4.1 Test local sur le serveur
```bash
# Vérifier que le build existe
ls -la /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/client/build/index.html

# Test du serveur
curl http://localhost:3000
curl http://localhost:3000/api/health
```

#### 4.2 Logs et débogage
```bash
# Logs PM2
pm2 logs landing-page

# Logs Node.js
tail -f /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/server/logs/error.log
```

### 5. Configuration Nginx (si nécessaire)

#### 5.1 Proxy pass configuration
Dans Plesk → Websites & Domains → Votre domaine → Apache & Nginx Settings :

**Additional Nginx directives :**
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

### 6. Résolution des problèmes courants

#### 6.1 Erreur ENOENT
Si vous obtenez encore :
```
ENOENT: no such file or directory, stat '/var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/client/build/index.html'
```

**Solutions :**
1. Vérifier que le dossier `client/build` existe bien
2. Vérifier les permissions : `chmod -R 755 client/build`
3. Vérifier le chemin dans `server/index.js`

#### 6.2 Port déjà utilisé
```bash
# Trouver le processus utilisant le port
lsof -i :3000
# ou
netstat -tulpn | grep :3000

# Tuer le processus
kill -9 <PID>
```

#### 6.3 Permissions
```bash
# Donner les bonnes permissions
chmod -R 755 /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/
chown -R www-data:www-data /var/www/vhosts/cercleonline.com/httpdocs/landing-page-test/
```

### 7. Commandes de maintenance

#### 7.1 Redémarrage de l'application
```bash
# Via PM2
pm2 restart landing-page

# Via Plesk
Plesk → Websites & Domains → Node.js → Restart App
```

#### 7.2 Mise à jour du code
```bash
# Pull des changements
git pull origin main

# Rebuild React
cd client && npm run build && cd ..

# Redémarrer l'application
pm2 restart landing-page
```

### 8. Monitoring

#### 8.1 Status PM2
```bash
pm2 status
pm2 monit
```

#### 8.2 Logs
```bash
# Logs d'accès
pm2 logs landing-page --lines 50

# Logs d'erreurs
pm2 logs landing-page --err --lines 50
```

## ✅ Checklist de déploiement

- [ ] Build React généré (`client/build/`)
- [ ] Serveur Express configuré correctement
- [ ] Fichiers uploadés sur Plesk
- [ ] Dépendances installées (`npm install`)
- [ ] Variables d'environnement configurées
- [ ] Application démarrée (PM2 ou npm start)
- [ ] Tests de fonctionnement effectués
- [ ] Logs vérifiés
- [ ] Monitoring configuré

## 📞 Support

En cas de problème :
1. Vérifier les logs PM2 : `pm2 logs`
2. Vérifier les permissions des fichiers
3. Vérifier que le dossier `client/build` existe
4. Tester localement avec `npm start` dans le dossier server
