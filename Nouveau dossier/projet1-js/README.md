1. Exercice 1: Utilisation de map
La méthode map permet de créer un nouveau tableau en appliquant une fonction sur chaque élément d'un tableau existant.
Dans cet exercice, map prend chaque élément du tableau, effectue une opération sur cet élément (par exemple, le multiplier par 3) et retourne un nouveau tableau contenant ces valeurs transformées.
2. Exercice 2: Utilisation de filter et reduce
filter :

Filtre les éléments du tableau selon une condition donnée.
Permet de créer un tableau contenant uniquement les objets qui satisfont cette condition (par exemple, ceux dont une propriété est true).
map :

Transforme chaque élément du tableau filtré en extrayant uniquement la valeur souhaitée (par exemple, le nom).
reduce :

Combine tous les éléments d'un tableau en une seule valeur.
Utilisé pour calculer des totaux ou effectuer des opérations d'accumulation sur les propriétés d'un tableau d'objets.
3. Exercice 3: Ajout d'un élément à un tableau
La méthode concat est utilisée pour ajouter un nouvel objet à la fin d'un tableau existant sans le modifier.
Permet de retourner un nouveau tableau contenant tous les éléments existants ainsi que le nouvel élément ajouté.
4. Exercice 4: Manipulation du tableau (Insertion, Suppression, Mise à jour)
a. pureInsert
splice est utilisé pour insérer un nouvel élément à une position spécifique dans le tableau.
La méthode ajoute l'élément à l'index spécifié sans supprimer d'éléments existants.
b. pureDeleteByPosition
Utilise splice pour supprimer un élément du tableau à un index donné.
Retire un seul élément à l'index spécifié.
c. pureDeleteByID
filter est utilisé pour créer un nouveau tableau qui exclut l'élément correspondant à l'identifiant (id) spécifié.
Permet de filtrer les éléments du tableau selon leur identifiant.
d. pureUpdateByPosition
Accède directement à un index donné pour remplacer l'élément par de nouvelles valeurs.
Modifie l'objet existant sans affecter les autres éléments.
e. pureUpdateByID
map est utilisé pour mettre à jour un élément correspondant à un identifiant spécifique.
Si l'identifiant correspond, l'élément est remplacé par de nouvelles valeurs; sinon, l'élément reste inchangé.
Utilisation des Fonctions avec des Exemples
Insertion : Ajoute un nouvel élément à une position définie.
Suppression par Position : Supprime l'élément à l'index spécifié.
Suppression par ID : Supprime l'élément dont l'identifiant correspond.
Mise à jour par Position : Remplace l'élément existant à un index donné par un nouvel élément.
Mise à jour par ID : Met à jour l'élément correspondant à l'identifiant donné avec de nouvelles valeurs.