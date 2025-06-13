const weatherLinks = {
    "Meteo Esteri": [
        { name: "Weatherlabs", url: "http://www.weatherlabs.com" },
        { name: "Slovenia", url: "http://www.arso.gov.si" },
        { name: "Croazia", url: "http://meteo.hr/index.php" },
        { name: "Austria", url: "http://www.zamg.ac.at" },
        { name: "Germania", url: "http://www.dwd.de/" },
        { name: "Svizzera", url: "http://www.meteoschweiz.ch" },
        { name: "Francia", url: "http://www.meteo.fr/temps/index.html" },
        { name: "Inghilterra", url: "https://www.meteoblue.com" },
        { name: "Windy", url: "https://www.windy.com" },
    ],
    "Meteo Italiani": [
        { name: "Meteo per i professionisti", url: "https://www.meteo.it" },
        { name: "Nautica online Meteo", url: "http://www.nautica.it/meteo/index.htm" },
        { name: "Aeronautica Militare", url: "http://www.meteoam.it/" },
        { name: "Tempo Italia", url: "http://www.tempoitalia.it/m" },
        { name: "3Bmeteo", url: "https://www.3bmeteo.com" },
        { name: "Il Meteo", url: "https://www.ilmeteo.it" },
    ],
    "Meteo Regionali": [
        { name: "ARPA Friuli Venezia Giulia", url: "http://www.osmer.fvg.it" },
        { name: "ARPA Piemonte", url: "https://www.arpa.piemonte.it" },
        { name: "ARPA Veneto", url: "https://www.arpa.veneto.it" },
        { name: "ARPA Emilia-Romagna", url: "https://www.arpae.it" },
        { name: "Trentino", url: "https://www.meteotrentino.it" },
        { name: "Lombardia", url: "http://www.astrogeo.va.it/prevmete.htm" },
        { name: "Liguria", url: "https://www.arpal.liguria.it/tematiche/meteo.html" },
        
    ],
    "Webcam & Stazioni": {
        "Webcam": [
            { name: "Webcam da tutto il mondo", url: "https://www.webcamgalore.it/" },
            { name: "Meteo Webcam", url: "http://www.meteowebcam.it/" },
            { name: "MeteoNetwork", url: "https://www.meteonetwork.it" },
        ],
        "Stazioni Barometriche": [
            { name: "Montegrisa", url: "http://www.cisartrieste.it/meteo/grisa" },
            { name: "Lanterna", url: "https://www.cisartrieste.it/meteo/lanterna/template/index.php" },
        ],
    },
};

function createGrid(weatherLinks) {
    const container = document.getElementById('grid-container');

    for (const category in weatherLinks) {
        const column = document.createElement('div');
        column.className = 'column';

        const heading = document.createElement('h2');
        heading.textContent = category;
        column.appendChild(heading);

        const sectionData = weatherLinks[category];

        if (Array.isArray(sectionData)) {
            // Caso normale: array di link
            sectionData.forEach(site => {
                const button = document.createElement('button');
                button.textContent = site.name;
                button.onclick = () => window.open(site.url, '_blank');
                column.appendChild(button);
            });
        } else if (typeof sectionData === 'object') {
            // Caso con sottosezioni
            for (const subcategory in sectionData) {
                const subHeading = document.createElement('h3');
                subHeading.textContent = subcategory;
                subHeading.style.marginTop = '20px';
                column.appendChild(subHeading);

                sectionData[subcategory].forEach(site => {
                    const button = document.createElement('button');
                    button.textContent = site.name;
                    button.onclick = () => window.open(site.url, '_blank');
                    column.appendChild(button);
                });
            }
        }

        container.appendChild(column);
    }
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

window.onload = function () {
    createGrid(weatherLinks);
};
