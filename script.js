
//tilmeld nyhedsbrev
let resultat = document.getElementById("resultat");
const fonyhedsbrev = document.getElementById("fonyhedsbrev");
const indsetmail = document.getElementById("indsetmail")
buttonekstra.onclick = tilMeld;

function tilMeld(){
    if(indsetmail){

    }
}

function seOmChecked(){
    if(checkbox.checked){
        resultat.innerHTML = "Checked, dvs. krydset af.";
    } else{
        resultat.innerHTML = "ikke checked.";
    }
}

//Billedkarrusel
//Variable
const billed1 = document.getElementById("billed1");
const billed2 = document.getElementById("billed2");
const billed3 = document.getElementById("billed3");
const hoejrePil = document.getElementById("hoejrePil");
const venstrePil = document.getElementById("venstrePil");

//Array
const karrusell = [billed1, billed2, billed3];

karrusell[0].style.display = "block";
karrusell[1].style.display = "none";
karrusell[2].style.display = "none";

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

//Opskrifts beregning til højre
function tilføjElement() {
    const nyElementTekst = document.getElementById("nyt-element").value;
    if (nyElementTekst) {
      const liste = document.getElementById("aktiv-liste");
      const nytElement = document.createElement("li");
      nytElement.textContent = nyElementTekst;
      liste.appendChild(nytElement);
      document.getElementById("nyt-element").value = ""; // Nulstil inputfeltet
    }
  }
  
  function fjernElement() {
    const liste = document.getElementById("aktiv-liste");
    const sidsteElement = liste.lastChild;
    if (sidsteElement) {
      liste.removeChild(sidsteElement);
    }
  }
  
