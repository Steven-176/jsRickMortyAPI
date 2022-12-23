# jsRickMortyAPI

- Groupe composé de :
    - Denis Kirat
    - Steven Sivakaran
    - Walid Chiakh

## Installation 

#### 1) Installation de pnpm
- Télécharger pnpm et node
    - pnpm :
        ```sh
         iwr https://get.pnpm.io/install.ps1 -useb | iex
        ```
    - node :
        - https://nodejs.org/en/download/

#### 2) Cloner le projet 
Cloner ce projet en faisant :
```sh
git clone https://github.com/Steven-176/jsRickMortyAPI
```

Se déplacer dans le nouveau dossier :
```sh
cd jsRickMortyAPI
```

#### 3) Installation des dépendances

Cette commande permettra l'installation des dépendances pnpm :

```sh
pnpm install 
```
#### 4) Lancer le serveur 

Pour que le site soit fonctionnelle, il suffit de taper cette commande afin de lancer le serveur
```sh
pnpm dev
```

Ensuite, il suffit de copier le lien "Local" et de le coller dans la barre de recherche du navigateur. En général, le lien est http://localhost:5173

## Le projet

L'application créée est une SPA (Single Page Application), permettant de récupérer et d'afficher à partir d'une API, une page listant des personnages. 

Lien API: https://rickandmortyapi.com

Lien Vercel: https://js-rick-morty-api.vercel.app/

- Le projet contient :
    - Une page qui affiche les personnages de Rick & Morty 
    - Une barre de recherche qui filtre les noms des personnages et les affiche 
    - Les détails d'un personnage accessible en cliquant sur le titre du personnage 
