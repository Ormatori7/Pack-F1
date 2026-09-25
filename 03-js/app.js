/* =========================================================================
   MAILLON 3 — JAVASCRIPT : l'interface
   Les données arrivent du maillon Java, dans donnees.js :
     PILOTES = [{nom, ecurie, points, victoires}, ...]
     ECURIES = [{nom, points, victoires}, ...]
   Complétez les trois fonctions, puis ouvrez index.html dans le navigateur.
   ========================================================================= */

// 1. trierParPoints(liste) : renvoie une NOUVELLE liste triée par points
//    DÉCROISSANTS. La liste reçue ne doit pas être modifiée.
//    À points égaux, celui qui a le plus de victoires passe devant.
function trierParPoints(liste) {
  return [...liste].sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    return b.victoires - a.victoires;
  });
}
// utilisation d'un spread operator afin de cloner la liste sans avoir a modifier l'original
// on compare les points et en fonction de s'il y a une inégalité stricte on fait un calcul basé sur les points ou sur la victoire
 


// 2. remplirTableau(idCorps, liste) : remplit le <tbody> dont l'id est fourni.
//    Une ligne <tr> par entrée, avec dans l'ordre les cellules <td> :
//      rang (1, 2, 3...) | nom | écurie (chaîne vide si absente) | points | victoires
//    Chaque <tr> porte l'attribut data-nom. Un nouvel appel REMPLACE le contenu.
function remplirTableau(idCorps, liste) {
  let tbody = document.getElementById(idCorps);
  tbody.innerHTML = "";

  for (let i = 0; i < liste.length; i++) {
    let pilote = liste[i];

    let ecurie = pilote.ecurie;
    if (ecurie === undefined) {
      ecurie = "";
    }

    let tr = document.createElement("tr");
    tr.setAttribute("data-nom", pilote.nom);

    let rang = i + 1;

    tr.innerHTML = `
            <td>${rang}</td>
            <td>${pilote.nom}</td>
            <td>${ecurie}</td>
            <td>${pilote.points}</td>
            <td>${pilote.victoires}</td>
        `;

    tbody.appendChild(tr);
  }
}

// on récupère le corps du tableau html avec son id et on le vide  pour ne pas mettre les données les unes sur les autres
// on parcourt la liste des pilotes un à un avec une boucle for
// on vérifie si l'écurie est absente et si oui on la remplace par du texte vide pour éviter d'afficher undefined
// on crée une nouvelle ligne et on lui donne l'attribut data-nom avec le nom du pilote
// on remplit l'intérieur de la ligne avec les <td> dans le bon ordre 
// on ajoute cette nouvelle ligne dans le tableau html

// 3. marquerPodium(idCorps) : ajoute la classe CSS "podium" aux TROIS PREMIÈRES
//    lignes du tableau, et la retire de toutes les autres.
function marquerPodium(idCorps) {
  // À COMPLÉTER
}

/* --- FOURNI — NE PAS MODIFIER : affichage de la saison ------------------- */
function afficherSaison() {
  if (typeof PILOTES === "undefined") {
    return;
  }
  remplirTableau("corps-pilotes", trierParPoints(PILOTES));
  marquerPodium("corps-pilotes");
  remplirTableau("corps-ecuries", trierParPoints(ECURIES));
  marquerPodium("corps-ecuries");
}
