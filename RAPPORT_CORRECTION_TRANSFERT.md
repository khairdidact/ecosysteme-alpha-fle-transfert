# Correction non destructive du 27 juin 2026

Cette archive corrige le dépôt `ecosysteme-alpha-fle-transfert` sans supprimer les contenus, les assets ni les liens de jeux.

## Points corrigés

1. La page d’accueil est rétablie depuis la version originale fournie.
2. Tous les chemins internes `/ecosysteme-alpha-fle-transfert/` ont été remplacés par `/ecosysteme-alpha-fle-transfert/` pour éviter qu’un clic sur Accueil ou une rubrique renvoie vers l’ancien dépôt.
3. Une couche CSS responsive et harmonisée a été ajoutée à la fin de `assets/css/style.css`, sans retirer les règles existantes.
4. Le menu mobile est renforcé dans `assets/js/main.js`, sans changer les contenus.

## Important pour GitHub

Pour que la correction soit visible, déposer le **contenu** du dossier extrait à la racine du dépôt `ecosysteme-alpha-fle-transfert`, puis vérifier que GitHub Pages publie bien la branche `main` depuis `/root`.
