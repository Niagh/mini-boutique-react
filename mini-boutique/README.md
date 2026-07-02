# Mini Boutique React

## Présentation du projet

Ce projet est une petite interface de boutique réalisée avec React.

L'application affiche :

- un header ;
- une liste de produits ;
- une carte par produit ;
- une section de détails ;
- un footer.

Le but du projet est de comprendre les bases de React, notamment les composants, les props, les imports/exports et la composition de composants.

---

## Aperçu du projet

## Capture d'écran du rendu final

![Capture début mini boutique](./screenshots/Screen1.png)
## Fonctionnalités

L'application affiche plusieurs produits :

- Ordinateur portable
- Souris sans fil
- Barrette de RAM
- Pâte thermique
- Clavier mécanique

Chaque produit possède :

- un nom ;
- un prix ;
- une catégorie ;
- une image ;
- une courte description ;
- une disponibilité.

---

## Composants utilisés

### App

Le composant `App` est le composant principal de l'application.

Il sert à assembler les autres composants :

- `Header`
- `ProductList`
- `ProductDetails`
- `Footer`

---

### Header

Le composant `Header` affiche le titre de la boutique ainsi qu'une courte phrase de présentation.

---

### ProductList

Le composant `ProductList` affiche la liste des produits.

Il utilise plusieurs fois le composant `ProductCard` pour créer une carte par produit.

---

### ProductCard

Le composant `ProductCard` affiche les informations d'un produit.

Il reçoit les informations grâce aux props :

- `name`
- `price`
- `category`
- `image`
- `description`
- `available`

Cela permet d'utiliser le même composant pour plusieurs produits différents.

---

### ProductBadge

Le composant `ProductBadge` affiche la catégorie du produit sous forme de badge.

---

### ProductDetails

Le composant `ProductDetails` affiche une section de détails pour un produit mis en avant.

---

### Footer

Le composant `Footer` affiche le pied de page de l'application.

---

## Améliorations réalisées

J'ai ajouté plusieurs améliorations au projet :

- ajout de deux produits supplémentaires : une barrette de RAM et une pâte thermique ;
- ajout d'une description courte pour chaque produit ;
- ajout d'une prop `available` pour afficher si un produit est disponible ou indisponible ;
- ajout d'un composant `ProductBadge` pour afficher la catégorie du produit ;
- modification du style CSS ;
- remplacement de certaines images temporaires par des images plus adaptées.

---

## Lancer le projet

Pour lancer le projet, il faut utiliser la commande suivante :

```bash
npm run dev
```
## TP 6.2 - Mini boutique avec panier

## Capture d'écran du rendu final

![Capture finale de la mini boutique](./screenshots/Screen3.png)

Dans ce TP, j'ai transformé le catalogue en mini boutique avec un début de gestion de panier.

### Fonctionnalités ajoutées

- Affichage des produits avec `.map()`
- Utilisation d'une `key` pour chaque produit
- Création d'un composant `Cart.jsx`
- Ajout d'un produit au panier
- Affichage du panier
- Message quand le panier est vide
- Calcul du total du panier
- Suppression d'un produit du panier
- Bouton pour vider le panier
- Formulaire contrôlé avec le nom du client
- Validation du formulaire avec `preventDefault()`
- Utilisation de `useEffect` pour observer les changements du panier dans la console

### Notions travaillées

- `.map()`
- `key`
- `useState`
- `useEffect`
- props
- événements React
- rendu conditionnel
- formulaire contrôlé
- calcul avec `reduce()`


