# Magne Invest — version application installable

Cette version conserve le site existant et ajoute une PWA installable.

## Changements
- manifest.jason corrigé en manifest.json
- icônes PWA 192x192 et 512x512 créées à partir du logo existant
- service worker unifié dans sw.js
- bouton « Installer l'application » ajouté dans l'en-tête
- le contenu existant, les biens, prix, WhatsApp et sections du site sont conservés
- les ressources externes (WhatsApp, YouTube, Facebook, Unsplash, QRCode CDN) restent chargées en ligne

## Déploiement
1. Remplacer les fichiers de votre site par ceux du dossier `grace`.
2. Garder le site en HTTPS (Netlify le fournit).
3. Ouvrir le site sur Android/Chrome ou ordinateur compatible.
4. Le bouton « Installer l'application » apparaîtra quand le navigateur autorise l'installation.

Cette PWA est une application web installable. Elle ne crée pas encore un APK Play Store natif.
