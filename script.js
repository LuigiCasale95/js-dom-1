/* Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */

/* Selezione delle Variabili */

const lampOn = document.querySelector(".on");
console.log(lampOn);
const lampOff = document.querySelector(".off");
console.log(lampOff);
const bottone = document.getElementById("bottone");
console.log(bottone);




bottone.addEventListener('click', on_Off)
bottone.addEventListener("click", changeButton)






/* FUNZIONI */
function on_Off () {
    const isOn = lampOff.classList.contains("off")/* se l'elemento contiene la classe "off" allora restutuisce true altrimenti false */
    if (isOn) { //se isOn risulta true allora:
        lampOff.classList.add("on")/* alla lampadina spenta si aggiunge on(display none) */
        lampOff.classList.remove("off")/* alla lampadina spenta si toglie off(display inline) */
        lampOn.classList.remove("on")/* alla lampadina accesa si toglie on(display none) */
        lampOn.classList.add("off") // alla lampadina accesa si aggiunge off(display inline) 
    } else { //altrimenti
        lampOff.classList.add("off")/* alla lampadina spenta si aggiunge on(display none) */
        lampOff.classList.remove("on")/* alla lampadina spenta si toglie off(display inline) */
        lampOn.classList.remove("off")/* alla lampadina accesa si toglie on(display none) */
        lampOn.classList.add("on")  // alla lampadina accesa si aggiunge off(display inline) 

    }
}

/* Funzione per il bottone */
function changeButton() {
    bottone.classList.toggle("yellowButton") /* Ad ogni clic toglie e rimette la la class YellowButton */
    bottone.innerHTML = "Acceso"  /* Con il clic si sostituisce la scritta spento con acceso */

    const isAcceso = bottone.classList.contains("Acceso") /* Genera true se ha la class "Acceso" */
    if (isAcceso) { /* Ha acceso? */
            bottone.innerHTML = "Accendi" /* Si inserisce la scritta spento */
            bottone.classList.remove("Acceso") /* "Acceso" */
    } else {/* Non ha acceso? */
        bottone.innerHTML = "Spegni" /* Aggiunge la scritta */
        bottone.classList.add("Acceso")  /* Aggiunge la class "Acceso" */
    }
}
