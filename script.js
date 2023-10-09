
//Error side skriftende tekst
// Funktion til at ændre overskriften automatisk ved indlæsning
function skiftOverskriftAutomatisk() {
    // Hent den gemte overskrift fra localStorage, eller brug en standardoverskrift
    let gemtOverskrift = localStorage.getItem('gemtOverskrift');
    if (!gemtOverskrift) {
        gemtOverskrift = "overskrift1"; // Standardoverskrift
    }

    // Tilfældigt valg af en ny overskrift (undgå gentagelser)
    let overskrifter = ["Nippon har brændt maden på...", "Nippon arbejder hårdt i køkkenet i dag...", "Nippon tabte en dumpling på gulvet..."];
    overskrifter = overskrifter.filter(overskrift => overskrift !== gemtOverskrift); // Fjern den gemte overskrift
    const tilfældigIndex = Math.floor(Math.random() * overskrifter.length);
    const nyOverskrift = overskrifter[tilfældigIndex];

    // Opdater den aktive overskrift og gem den valgte overskrift i localStorage
    const aktivOverskrift = document.getElementById('overskrift1');
    aktivOverskrift.innerText = nyOverskrift;
    localStorage.setItem('gemtOverskrift', nyOverskrift);
}

// Kald funktionen automatisk ved indlæsning af siden
window.onload = skiftOverskriftAutomatisk;

overskrifter = overskrifter.filter(function(overskrift) {
    return overskrift !== gemtOverskrift;
  });
  



//Billedkarrusel
//Variable
const billed1 = document.getElementById("billed1");
const billed2 = document.getElementById("billed2");
const billed3 = document.getElementById("billed3");
const billed4 = document.getElementById("billed4");
const hoejrePil = document.getElementById("hoejrePil");
const venstrePil = document.getElementById("venstrePil");

//Array
const karrusell = [billed1, billed2, billed3, billed4];

karrusell[0].style.display = "block";
karrusell[1].style.display = "none";
karrusell[2].style.display = "none";
karrusell[3].style.display = "none";

//Bottons
hoejrePil.addEventListener("click", naesteBillede);
venstrePil.addEventListener("click", forrigeBillede);

//Function
function naesteBillede(){
    karrusell[0].style.display = "none"; // Skjul den viste
    karrusell.push(karrusell[0]); // Put den første ind til sidst
    karrusell.shift(); // Fjern den første og flyt alle en ned
    karrusell[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    karrusell[0].style.display = "none";
    karrusell.unshift(karrusell[2]);
    karrusell.pop();
    karrusell[0].style.display = "block";
}
  
