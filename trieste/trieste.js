const links = [
    { url: "http://www.comune.trieste.it/", img: "img/01comunets.png" },
    { url: "https://sesamo.sanita.fvg.it", img: "img/02sesamo.png" },
    { url: "http://www.areasciencepark.it/", img: "img/03scientifico.png" },
    { url: "http://www.aeroporto.fvg.it/", img: "img/04ronchi.png" },
    { url: "http://www.univ.trieste.it/", img: "img/05units.png" },
    { url: "http://www.prolocoregionefvg.it/index.html", img: "img/06proloco.png" },
    { url: "http://www.ilpiccolo.it/", img: "img/07piccolo.png" },
    { url: "http://www.triestecultura.it/", img: "img/08tscultura.png" },
    { url: "https://www.unicredit.it/it/privati.html", img: "img/09unicredit.png" },
    { url: "http://www.triestetrasporti.it/", img: "img/10tts.png" },
    { url: "http://www.trieste.com/index.php", img: "img/11tscom.png" },
    { url: "http://www.turismofvg.it/", img: "img/12fvg.png" },
    { url: "http://www.triesteprima.it/", img: "img/14tsprima.png" },
    { url: "http://bora.la/", img: "img/15bora.png" },
    { url: "https://explorerfvg.com/", img: "img/16explorer.png" },
    { url: "https://www.pallacanestrotrieste.it/", img: "img/17palla.png" },
    { url: "immobiliari/immobiliari.html", img: "img/18immobiliari.png" } //
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
