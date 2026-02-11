# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Site vitrine mono-page pour **Nathalie Perrier**, psychothérapeute à Lons-le-Saunier (39000). Design validé par le client à partir d'un canvas Canva.

## Stack technique

- HTML5 sémantique (pas de framework)
- CSS3 vanilla (custom properties, Grid, Flexbox, mobile-first)
- JavaScript vanilla (ES5+ compatible, pas de dépendance)
- Fonts : Google Fonts (Alkalami, Cormorant Garamond, Open Sans)

## Structure des fichiers

```
index.html       — Page unique avec toutes les sections
styles.css       — Styles complets, responsive, accessibilité
script.js        — Navigation, menu mobile, scroll reveal
images/          — Dossier des assets images (à fournir)
```

## Charte couleur

| Couleur     | Hex       | Usage                    |
|-------------|-----------|--------------------------|
| Beige       | `#DAD3C8` | Fond principal           |
| Burgundy    | `#4E0303` | Accent, CTA, footer      |
| Dark green  | `#012F09` | Accent secondaire        |
| Noir        | `#1A1A1A` | Texte                    |
| Blanc       | `#FFFFFF` | Texte sur fond sombre    |

## Sections (ordre descendant)

1. **Hero** (`#accueil`) — Nom, titre, accroche
2. **Mon approche** (`#approche`) — Citation + description + images
3. **Pour qui** (`#pour-qui`) — Cards enfants/adolescents/adultes
4. **Objectifs** (`#objectifs`) — Objectifs des consultations
5. **Démarche** (`#demarche`) — Transgénérationnel
6. **Formations** (`#formations`) — Diplômes et formations
7. **Contact** (`#contact`) — Téléphone, adresse, carte

## Navigation

- "Accueil" → `#accueil` (haut de page)
- "Mon approche" → `#objectifs` (section Objectifs des consultations)
- "Lire la suite" → `#objectifs`
- "Me contacter" → `#contact` (bas de page)

## Accessibilité

- Skip link, ARIA landmarks, aria-label sur les éléments interactifs
- Hiérarchie h1 > h2 > h3 stricte
- Contraste WCAG AA+ validé
- `prefers-reduced-motion` respecté
- Focus visible sur tous les éléments interactifs
- Images avec `alt` descriptif

## SEO

- Schema.org `ProfessionalService` en JSON-LD
- Balises Open Graph
- Meta description ciblée
- URL canonique
