/* Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */

/* Selezione delle Variabili */

const lampOn = document.querySelector(".on");
console.log(lampOn);
const lampOff = document.querySelector(".off");
console.log(lampOff);
const lampadinaOff = document.querySelector(".lampadina-off");
console.log(lampadinaOff);
const lampadinaOn = document.querySelector(".lampadina-on");
console.log(lampadinaOn);
const bottone = document.getElementById("bottone");
console.log(bottone);




bottone.addEventListener('click', on_Off)







/* FUNZIONI */
function on_Off () {
    const isOn = lampadinaOff.classList.contains("off")
    if (!isOn) {
        lampadinaOff.classList.add("off")
        lampadinaOn.classList.remove("on")
    } else {
        lampadinaOff.classList.remove("off")
        lampadinaOn.classList.add("on")
    }
}