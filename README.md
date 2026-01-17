# Tests automatisés E2E avec Cypress – SauceDemo

## Description du projet

Ce projet consiste en la mise en place de tests automatisés End-to-End (E2E) pour la page de connexion du site SauceDemo (Swag Labs), en utilisant le framework Cypress.

L’objectif principal est de vérifier la fiabilité, la sécurité et la robustesse du mécanisme d’authentification, à travers différents scénarios (cas valides, cas d’erreurs, utilisateur bloqué, etc.).

Ce travail s’inscrit dans le cadre du module Qualité et sûreté de fonctionnement logiciel pour l’année universitaire 2025–2026.

---

## Objectifs

- Automatiser les tests fonctionnels de la page de login  
- Vérifier les scénarios de connexion valides et invalides  
- Détecter les anomalies UI et réseau  
- Améliorer la qualité logicielle et l’expérience utilisateur  
- Illustrer l’utilisation de Cypress pour les tests E2E  

---

## Site testé

- URL : https://www.saucedemo.com  
- Plateforme e-commerce de démonstration destinée à l’apprentissage du testing logiciel  

---

## Outils et technologies

- Cypress  
- JavaScript  
- Node.js  
- Google Chrome / Electron  
- Git et GitHub  

---

## Fonctionnalités testées

- Affichage du formulaire de connexion  
- Connexion réussie avec un utilisateur valide (standard_user)  
- Validation des champs obligatoires  
- Gestion du cas d’un utilisateur bloqué (locked_out_user)  
- Analyse des erreurs réseau  

---

## Bugs identifiés

1. Erreurs réseau (HTTP 401) lors de la saisie des champs  
2. Validation UI incomplète (absence de focus automatique)  
3. Message peu explicite pour les utilisateurs bloqués  

Les détails complets sont disponibles dans le rapport du projet.

---

## Structure du projet

```bash
├── cypress/
│   ├── e2e/
│   │   └── sauceDemo.cy.js
│   ├── fixtures/
│   ├── support/
├── cypress.config.js
├── package.json
├── README.md
