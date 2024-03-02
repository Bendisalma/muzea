# mezea

Ce projet de fin d'études consiste en une plateforme e-commerce dédiée à la vente d'œuvres d'art, avec une architecture Full Stack comprenant deux parties distinctes : l'interface d'administration (Admin) et la plateforme de magasin (Magasin).
Ce projet offre une expérience complète d'e-commerce d'œuvres d'art, de la gestion administrative à la navigation et l'achat pour les clients.

## Fonctionnalités de l'Interface d'Administration (Admin)
### Authentification Google : 

Les administrateurs peuvent s'authentifier rapidement via Google pour accéder à l'interface d'administration.

### Tableau de Bord : 

Un tableau de bord complet affiche les commandes et les revenus pour la journée, la semaine et le mois.

### Gestion des Oeuvres :

Ajout d'œuvres avec spécification de la catégorie et des propriétés.

Modification ou suppression facile des œuvres existantes.

### Gestion des Catégories : 

Possibilité d'ajouter de nouvelles catégories et leurs propriétés associées.

### Commandes : 

Vue détaillée des commandes avec informations sur la date, le statut de paiement, le client, l'adresse et les œuvres commandées.

### Administrateurs : 

Gestion des administrateurs autorisés à accéder à la plateforme d'administration.

### Configuration : 

Paramétrage du prix de livraison et des œuvres qui apparaîtront en tant qu'œuvres vedettes sur la page d'accueil.

## Fonctionnalités de la Plateforme de Magasin (Magasin)
### Présentation des Oeuvres : Affichage de l'œuvre vedette en premier, suivi des autres œuvres disponibles.

### Filtrage et Tri :

**Filtrage des œuvres par catégorie.**
Options de filtrage par couleur, catégorie et tri par prix ou les plus récentes.

### Panier :

**Ajout d'œuvres au panier.**
Consultation du panier avec les œuvres sélectionnées et leurs prix.
**Paiement avec Stripe :** Intégration de Stripe pour un processus de paiement sécurisé, avec une remise de 20% pour chaque achat dépassant 100$.

### Connexion Google : 

Les clients peuvent se connecter via Google et ajouter des œuvres à leurs favoris.

## Technologies Utilisées
React
Next.js
Next.Auth
Tailwind CSS
MongoDB
Amazon S3
Google Cloud Console
DialogFlow
Stripe
Vercel
