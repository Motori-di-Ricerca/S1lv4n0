// JavaScript source code
// Qui puoi aggiungere codice JS, ad esempio per gestire i click sui pulsanti

// Array di link corrispondenti ai pulsanti
const linkPulsanti = [
    "trieste/trieste.html", // Indirizzi utili di Trieste
    "meteo/meteo.html", // Meteo
    "auto/auto.html", // Auto
    "f1/formula1.html",// Calendario Formula 1 2025
    "elettrodomestici/elettrodomestici.html", // Audio TV Elettrodomestici
    "computer/computer.html", // Computer e Telefonia
    "astronomia/astronomia.html", // Astronomia
];

// Aggiungi gli event listener ai pulsanti della sidebar
document.querySelectorAll(".sidebar button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const url = linkPulsanti[index];
        window.location.href = url;
    });
});


const immagini = [
    { src: "img/alice.jpg", href: "http://mail.alice.it/", alt:"Immagine 1" },
    { src: "img/yahoo.jpg", href: "http://www.yahoo.it/", alt: "Immagine 2" },
    { src: "img/libero.gif", href: "http://www.libero.it/", alt: "Immagine 3" },
    { src: "img/tiscali.gif", href: "http://www.tiscali.it/", alt: "Immagine 4" },
    { src: "img/google.gif", href: "http://www.google.it/", alt: "Immagine 5" },
    { src: "img/youtube.gif", href: "http://www.youtube.com/", alt: "Immagine 6" },
    { src: "img/amazon.jpg", href: "http://www.amazon.it/", alt: "Immagine 6" },
    { src: "img/gpt.gif", href: "https://chatgpt.com", alt: "Immagine 6" },
    { src: "img/ask.gif", href: "http://it.ask.com/", alt: "Immagine 6" },
    { src: "img/bing.jpg", href: "http://www.bing.com/", alt: "Immagine 6" },
    { src: "img/istella.gif", href: "http://www.istella.it/", alt: "Immagine 6" },
  
];

aggiungiImmaginiConLink(immagini);

function aggiungiImmaginiConLink(listaImmagini) {
    const griglia = document.querySelector(".image-grid");
    griglia.innerHTML = ""; // Pulisce la griglia prima di inserire nuove immagini

    listaImmagini.forEach(item => {
        const link = document.createElement("a");
        link.href = item.href;

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt || "immagine";

        link.appendChild(img);
        griglia.appendChild(link);
    });
}
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