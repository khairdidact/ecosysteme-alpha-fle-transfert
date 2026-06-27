# Rapport de reprise fidèle - ecosysteme-alpha-fle-transfert

## Principe appliqué

Cette reprise part du ZIP complet du dépôt original `ecosysteme-alpha-fle-main`. Elle ne reconstruit pas le site et ne remplace pas les rubriques par des contenus simplifiés.

## Conservation

- Toutes les pages HTML du dépôt original sont conservées : 26 pages HTML.
- Tous les dossiers pédagogiques originaux sont conservés :
  - `pages/agir-suivant-des-valeurs/`
  - `pages/employer-une-methode/`
  - `pages/evaluer/`
  - `pages/mallettes-locales/`
  - `pages/sites-utiles/`
  - `pages/supports-telechargeables/`
- Tous les assets originaux sont conservés : `assets/css`, `assets/js`, `assets/images`.
- Les liens de jeux, ressources MaClé Alpha, pictogrammes, planches, sites utiles et ressources externes n'ont pas été supprimés.

## Corrections appliquées

### 1. Chemins du dépôt GitHub Pages

Remplacement global de :

```text
/ecosysteme-alpha-fle/
```

par :

```text
/ecosysteme-alpha-fle-transfert/
```

Cela corrige le problème où le clic sur `Accueil` renvoyait vers l'ancien site au lieu de rester dans le dépôt de transfert.

### 2. Configuration Jekyll

`_config.yml` corrigé :

```yml
baseurl: "/ecosysteme-alpha-fle-transfert"
url: "https://khairdidact.github.io"
```

### 3. Lien interne MaClé Alpha inexistant

Correction du lien cassé :

```text
/pages/employer-une-methode/macle-alpha.html
```

vers la page réellement présente :

```text
/pages/mallettes-locales/methode-macle-alpha.html
```

### 4. Pictogrammes Fondation Autisme Luxembourg

Le lien de la page `pages/supports-telechargeables/pictos.html` est conservé et vérifié :

```text
https://www.fal.lu/ressources-outils/pictogrammes/
```

### 5. Pas à pas CAVILAM

Le lien direct fragile de téléchargement Google Drive est remplacé par la page officielle de téléchargement :

```text
https://www.leplaisirdapprendre.com/portfolio/pas-a-pas/
```

### 6. Open Badge

L'ancien lien `openbadges.ledome.info/generateur/`, quand présent, est remplacé par :

```text
https://openbadgepassport.com/
```

### 7. Responsive

Ajout d'un patch CSS non destructif à la fin de `assets/css/style.css` :

- menu mobile plus robuste ;
- grilles en une colonne sur mobile ;
- cartes et boutons plus lisibles ;
- prévention des débordements horizontaux ;
- images et iframes adaptatives.

Le JavaScript du menu est également renforcé dans `assets/js/main.js`.

## Vérification locale

Contrôle automatique des liens internes `href` et `src` :

```text
Pages HTML : 26
Références internes vérifiées : 797
Liens internes manquants : 0
Liens externes uniques repérés : 491
```

## Publication

Déposer le contenu du dossier extrait dans le dépôt GitHub :

```text
khairdidact/ecosysteme-alpha-fle-transfert
```

Ne pas déposer le dossier comme sous-dossier. Il faut que `index.html`, `_config.yml`, `assets/` et `pages/` soient directement à la racine du dépôt.
