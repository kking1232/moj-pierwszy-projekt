const teksty = [
    "Dajesz mordo - lecisz",
    "Lecymy durś"
];

const przycisk = document.getElementById('motywator-btn');
const miejsceNaCytat = document.getElementById('cytat');

function wyswietlMotywacje(){
    const losowyIndeks = Math.floor(Math.random() * teksty.length);

    miejsceNaCytat.textContent = teksty[losowyIndeks];
}

przycisk.addEventListener('click', wyswietlMotywacje);


function dodajPunkt(){

    let tekst = document.getElementById("moje-pole").value;
    
    document.getElementById("naszaLista").innerHTML += "<li>" + tekst + "</li>";
}