TP spécialité NSI ------ 1ère

/*1. Créer une variable « newyear » et lui affecter la valeur de la date de la
nouvelle année à venir. Celle-ci est une chaine de caractère et au format
« j m aaaa », le mois est représenté par trois lettre (jan pour janvier par
exemple).
2. Créer une fonction « compteur ». Attention aux accolades.
3. Nous allons avoir besoin de convertir la date de la nouvelle année dans un
format numérique. Cela nous permettra de compter les jours, les heures, les
minutes et les secondes séparant la date d’aujourd’hui de celle de la
nouvelle année.
L’objet Date en javascript contient le nombre de millisecondes écoulés
depuis le 1er janvier 1970.
Dans la fonction « compteur », créer deux variables « newYearDate » et
« dateCourante » valant respectivement new Date(newyear) et new Date
().
Grâce à la fonction console.log, il est possible d’afficher dans la console
du navigateur (touche F12) le contenu d’une variable. Tester ceci avec
console.log (newYearDate – dateCourante).
4. Le résultat de newYearDate – dateCourante est en milliseconde, convertir
ce résultat en secondes, puis l’affecter à une variable « totalSecondes ».
5. Calculer le nombre de jours, d’heures, de minutes et de secondes
contenues dans la variable « totalSecondes ». Ces résultats, approchés par
défaut, seront affectées à autant de variables qu’il y a de calculs.
6. Afin de pouvoir interagir avec la page html, il va falloir afficher les résultats
de la question précédente dans les conteneurs prévus à cet effet.

Chaque conteneur possède un identifiant (id) dans le code html, et la
méthode getElementbyId() permet d’associer le script avec ces
conteneurs.
Avant la fonction, créer une variable « jourElt » affecté de la valeur de
document.getElementbyId("jours").
Faire de même avec des variables « heureElt », « minuteElt » et
« secondeElt » en les associant aux bonnes balises.
7. Dans la fonction « compteur », pour afficher les valeurs des jours, heures,
minutes et secondes, nous allons utiliser la méthode innerHTML sur les
variables « jourElt », « heureElt » ...
Ainsi l’instruction : jourElt.innerHTML = jours affichera sur la page html
dans le conteneur dont l’id est « jour » le contenu de la variable « jours ».
Faire de même pour les trois autres conteneurs.
8. A la fin du code, ajouter l’appel de la fonction « compteur » ainsi qu’un
appel toutes les secondes de cette même fonction grâce à setInterval.
*/
