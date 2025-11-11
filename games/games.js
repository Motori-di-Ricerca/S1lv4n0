// JavaScript source code
// Dati demo
const games = [
{ title: "Scarabeo", img: "img/scarabeo.jpg", desc: "Componi parole di senso compiuto", link: "http://scarabeoitaliano.github.io/Scrabble/" },
{ title: "Tiny Golf", img: "img/golf.jpg", desc: "Riuscirai a diventare il golfer più bravo di tutti?", link: "http://tinygolf.github.io/TinyGolfClub" },
{ title: "Game 2", img: "img/scarabeo.jpg", desc: "Descrizione del game 2", link: "http://.github.io/" },

];


const apps = [
{ title: "Call of the wild - the Angler", img: "img/cotw.jpg", desc: "Guida esche dei pesci nelle riserve", link: "http://call-of-the-wild.github.io/COTW/" },
{ title: "Astrolabio", img: "img/astrolabio.jpg", desc: "Una visione sul cielo di oggi", link: "https://stellarisphere.github.io/Astrolabio/" },
{ title: "App 2", img: "img/scarabeo.jpg", desc: "Descrizione dell'app 2", link: "http://.github.io/" },
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