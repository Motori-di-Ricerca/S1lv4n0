const links = [

    { url: "https://www.casa.it/", img: "img/casa.jpg" },
    { url: "https://www.idealista.it/", img: "img/idealista.jpg" },
    { url: "https://www.immobiliare.it/", img: "img/immobiliare.jpg" },
    { url: "https://www.rizzaimmobiliare.com/", img: "img/rizza.jpg" },
    { url: "https://www.subito.it/", img: "img/subito.jpg" },

];

function createGrid() {
    const container = document.getElementById("grid-container");

    links.forEach(linkData => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        const blurBox = document.createElement("div");
        blurBox.className = "blur-box";

        const link = document.createElement("a");
        link.href = linkData.url;

        const img = document.createElement("img");
        img.src = linkData.img;
        img.alt = "immagine utile";

        link.appendChild(img);
        blurBox.appendChild(link);
        gridItem.appendChild(blurBox);
        container.appendChild(gridItem);
    });
}

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


createGrid();
