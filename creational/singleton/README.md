# Design Patterns du GoF illustrées avec TypeScript

## Singleton

Le Singleton est un patron de conception de création qui s’assure de l’existence d’un seul objet de son genre et fournit un unique point d’accès vers cet objet.

Le singleton possède à peu près les mêmes avantages et inconvénients que les variables globales. Même s’ils sont super utiles, ils réduisent la modularité du code.

Vous ne pourrez pas utiliser une classe qui dépend d’un singleton dans un autre contexte. Vous devrez également inclure complètement la classe Singleton dans votre code. En général, on se rend compte de cette limitation lorsque l’on crée des tests unitaires.

Les patrons de conception illustrés sont issus du livre
**"Design Patterns: Elements of Reusable Object-Oriented Software (1994)"** écrit par Erich Gamma, John Vlissides, Ralph Johnson et Richard Helm.

Les textes de présentation des patrons de conception sont librement issus du site : https://refactoring.guru/fr/design-patterns

### Langage de programmation

Programmation Orienté Objet avec TypeScript / JavaScript.

### Runtime JavaScript

Node.js v.14.17.6 (octobre 2021).

### Vérification de la version de Node.js installée

`node -v`

v14.17.6

### Installation des dépendances NPM

_Les commandes ci-dessous doivent toutes être exécutées depuis la racine du répertoire du projet_

### Installation des dépendances NPM (avant la première utilisation)

`npm install`

### Installation globale de Nodemon pour le Hot Reloading (avant la première utilisation)

`npm install -g nodemon`

ou

`sudo npm install -g nodemon` (sur systèmes Unix)

### Exécution du logiciel (code JS déjà transpilé)

`npm start`

### Transpilation du code TypeScript vers JavaScript

`npm run build`

### Transpilation TypeScript vers JavaScript et exécution du logiciel

`npm run dev`

### Transpilation TypeScript vers JavaScript et exécution du logiciel avec activation du Hot Reloading (nodemon doit être installé)

`npm run watch`

### Exécution des tests unitaires avec Jest.js

`npm test`

### Emplacement du code TypeScript transpilé en JavaScript

`./dist`

### Consultation du résultat produit par le logiciel

Pendant son exécution, le logiciel génère des logs directement affichés dans le terminal où il est en cours d'exécution.

**Alexandre Leroux**

- _Mail_ : alex@sherpa.one
- _Github_ : sherpa1
- _Twitter_ : @_sherpa_
- _Discord_ : sherpa#3890

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital, Management & Cognition (Masters Sciences Cognitives)
