window.addEventListener("DOMContentLoaded", function () {
    const griglia = document.getElementById("griglia");
    griglia.innerHTML = "";

    const auto = [
        
        { immagine: "img/bigbang.gif", link: "https://www.bigbang.si/" },
        { immagine: "img/comet.gif", link: "https://www.gruppocomet.it/" },
        { immagine: "img/computerdiscount.gif", link: "https://www.computerdiscount.it/" },
        { immagine: "img/essedi.gif", link: "http://www.essedishop.it/" },
        { immagine: "img/euronics.gif", link: "https://www.euronics.it/" },
        { immagine: "img/expert.gif", link: "http://www.expert-italia.it/" },
        { immagine: "img/marcopoloshop.gif", link: "http://www.marcopoloshop.it/" },
        { immagine: "img/mediamark.gif", link: "https://www.mediamarkt.at/" },
        { immagine: "img/mediaworld.gif", link: "http://www.mediaworld.it/" },
        { immagine: "img/omcomputers.gif", link: "https://omcomputers.store/" },
        { immagine: "img/pcity.gif", link: "https://www.pccity.it/" },
        { immagine: "img/planetone.gif", link: "https://www.planet-one.it/" },
        { immagine: "img/unieuro.gif", link: "https://www.unieuro.it/" },


        // Aggiungi altre immagini manualmente...
    ];
    auto.forEach(autoItem => {
        const cella = document.createElement("div");
        cella.className = "cella";

        const link = document.createElement("a");
        link.href = autoItem.link;


        const img = document.createElement("img");
        img.src = autoItem.immagine;
        img.alt = "";

        link.appendChild(img);
        cella.appendChild(link);
        griglia.appendChild(cella);
    });
});
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
