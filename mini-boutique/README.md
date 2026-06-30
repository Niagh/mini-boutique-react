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

![Aperçu du projet](./ScreenshotMonProjet.png)

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

## Questions de compréhension

### 1. Quel est le rôle du composant App ?

Le composant `App` est le composant principal de l'application.

Il regroupe les autres composants et organise la structure générale de la page.

---

### 2. Pourquoi place-t-on les composants dans un dossier components ?

On place les composants dans un dossier `components` pour mieux organiser le projet.

Cela permet de séparer chaque partie de l'interface dans un fichier différent et de retrouver plus facilement le code.

---

### 3. Quelle est la différence entre ProductList et ProductCard ?

`ProductList` affiche la liste complète des produits.

`ProductCard` affiche une seule carte produit.

Donc `ProductList` utilise plusieurs fois `ProductCard`.

---

### 4. Pourquoi le nom ProductCard commence-t-il par une majuscule ?

Le nom `ProductCard` commence par une majuscule parce qu'en React, les composants doivent commencer par une majuscule.

Cela permet à React de reconnaître qu'il s'agit d'un composant personnalisé.

---

### 5. À quoi servent les props dans le composant ProductCard ?

Les props servent à transmettre des données au composant `ProductCard`.

Par exemple, elles permettent d'envoyer le nom, le prix, l'image, la description, la catégorie et la disponibilité du produit.

Grâce aux props, chaque carte peut afficher des informations différentes.

---

### 6. Pourquoi peut-on réutiliser plusieurs fois le même composant ProductCard ?

On peut réutiliser plusieurs fois le composant `ProductCard` parce qu'il garde la même structure.

Seules les informations changent grâce aux props.

Cela évite de répéter le même code plusieurs fois.

---

### 7. Quel composant est le parent de ProductCard ?

Le composant parent de `ProductCard` est `ProductList`.

C'est dans `ProductList` que les composants `ProductCard` sont utilisés.

---

### 8. Quel composant est le parent principal de toute l'application ?

Le composant parent principal de toute l'application est `App`.

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
