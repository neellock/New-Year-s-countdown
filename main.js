

let newyear = "1 jan 2025"; // Date de la nouvelle année au format "jour mois année"
let jourElt = document.getElementById("jours");
let heureElt = document.getElementById("heures");
let minuteElt = document.getElementById("minutes");
let secondeElt = document.getElementById("secondes");


function compteur() {


    let newYearDate = new Date(newyear);
    let dateCourante = new Date();
    console.log(newYearDate - dateCourante);


    let totalSecondes = (newYearDate - dateCourante) / 1000
    let jours = Math.floor(totalSecondes / (3600 * 24))
    let heures = Math.floor(totalSecondes % (3600 * 24)/3600)
    let minutes = Math.floor((totalSecondes % 3600) % 3600 / 60)
    let secondes = Math.floor((totalSecondes % 3600) % 3600 % 60)
    console.log(jours, heures, minutes, secondes)


    jourElt.innerHTML = jours
    heureElt.innerHTML = heures
    minuteElt.innerHTML = minutes
    secondeElt.innerHTML = secondes
    console.log("pipou")

    if (secondes < 10) {
        secondeElt.innerHTML = "0" + secondes
    } else {
        secondeElt.innerHTML = secondes
    }

    if (minutes < 10) {
        minuteElt.innerHTML = "0" + minutes
    } else {
        minuteElt.innerHTML = minutes
    }

    if (heures < 10) {
        heureElt.innerHTML = "0" + heures
    } else {
        heureElt.innerHTML = heures
    }

    if (jours < 10) {
        jourElt.innerHTML = "0" + jours
    } else {
        jourElt.innerHTML = jours
    }


}


// Appel de la fonction pour tester


setInterval(compteur, 1000);
