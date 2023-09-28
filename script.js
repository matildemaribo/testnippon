
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