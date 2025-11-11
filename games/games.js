// JavaScript source code
// Dati demo
const games = [
{ title: "Scarabeo", img: "img/scarabeo.jpg", desc: "Componi parole di senso compiuto", link: "http://scarabeoitaliano.github.io/Scrabble/" },
{ title: "Tiny Golf", img: "img/golf.jpg", desc: "Riuscirai a diventare il golfer più bravo di tutti?", link: "http://tinygolf.github.io/TinyGolfClub" },
{ title: "Wordle", img: "img/wordle.jpg", desc: "Indovina la parola", link: "https://wordleitaliano.github.io/WordleGame/" },
{ title: "ColorMatch", img: "img/colormatch.jpg", desc: "Riordina i colori in scala cromatica", link: "https://shufflecolormatch.github.io/ColorMatch/" },

];


const apps = [
{ title: "Call of the wild - the Angler", img: "img/cotw.jpg", desc: "Guida esche dei pesci nelle riserve", link: "http://call-of-the-wild.github.io/COTW/" },
{ title: "Astrolabio", img: "img/astrolabio.jpg", desc: "Una visione sul cielo di oggi", link: "https://stellarisphere.github.io/Astrolabio/" },
{ title: "Costellazioni", img: "img/costellazioni.jpg", desc: "Scopri il cielo stellato", link: "https://databasecostellazioni.github.io/Costellazioni/" },
{ title: "Formula 1", img: "img/f1.jpg", desc: "Punteggi e classifiche", link: "https://database-formula-1.github.io/F1/" },
{ title: "Orienteering", img: "img/orienteering.jpg", desc: "Classifica Orienteering PuntoK", link: "https://orienteeringpuntok.github.io/ClassificaPuntoK/" },
{ title: "Primogens counter", img: "img/genshin.jpg", desc: "Calcola il tuo destino", link: "https://primogenscounter.github.io/Counter/" },
    
];


function renderCards(list, containerId) {
const container = document.getElementById(containerId);
list.forEach(item => {
const card = document.createElement('div');
    card.className = containerId === "apps-list" ? "card app-card" : "card";

card.innerHTML = `
<a href="${item.link}" target="_blank">
<img src="${item.img}" alt="${item.title}" />
<h4>${item.title}</h4>
<p>${item.desc}</p>
`;
container.appendChild(card);
});
}


renderCards(games, "games-list");
renderCards(apps, "apps-list");

// JavaScript source code
function populateFooterGIFs(gifA, gifB) {
    const footer = document.getElementById('footer-gif-bar');
    footer.innerHTML = ''; // svuota se già presente

    const screenWidth = window.innerWidth;
    const gifWidth = 40; // larghezza in px, deve combaciare con il CSS
    const numGifs = Math.ceil(screenWidth / gifWidth);

    for (let i = 0; i < numGifs; i++) {
        const gif = document.createElement('img');
        gif.src = i % 2 === 0 ? gifA : gifB;
        gif.alt = 'Decorazione';
        footer.appendChild(gif);
    }
}

// Esegui al caricamento
window.addEventListener('load', () => {
    populateFooterGIFs('img/gif06.gif', 'img/gif07.gif');
});

// Esegui anche al resize per adattarsi
window.addEventListener('resize', () => {
    populateFooterGIFs('img/gif06.gif', 'img/gif07.gif');
});


// Imposta dimensione iniziale
aggiornaDimensione(select.value);

// Cambia quando l'utente seleziona
select.addEventListener("change", function () {
    aggiornaDimensione(this.value);
});