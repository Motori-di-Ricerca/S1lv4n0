const weatherLinks = {
    "Astronomia Esteri": [
        { name: "Telescopio Nazionale Galileo", url: "http://www.tng.iac.es/" },
        { name: "NASA Image of the Day", url: "https://www.nasa.gov/image-of-the-day/" },
        { name: "Hubble Space Telescope", url: "https://science.nasa.gov/mission/hubble/" },
        { name: "SPIRIT - OPPORTUNITY", url: "https://www.marsquestonline.org/mer/" },
        { name: "APOLLO 11", url: "https://www.nasa.gov/mission/apollo-11/" },
        
    ],
    "Astronomia Nazionali": [
        { name: "Vatican Observatory", url: "https://www.vaticanobservatory.org/" },
        { name: "Unione atrofili italiani", url: "https://www.uai.it/sito/" },
        { name: "Istituto Nazionale per l'Astrofisica", url: "http://www.inaf.it/it" },
        { name: "Planetologia Italiana", url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=http://www.inaf.it/it/campi-di-attivita/sole-e-sistema-solare/i-pianeti-e-i-corpi-minori-del-sistema-solare-e-di-altri-sistemi-stellari/copy_of_introduzione-la-planetologia-italiana-oggi" },
        { name: "Planetologia Italiana ", url: "http://www.sait.it/" },
        { name: "Agenzia Spaziale Italiana", url: "http://www.asi.it/" },
        { name: "Istituto Nazionale per l'Astrofisica", url: "http://www.inaf.it/" },
        { name: "Astrolabio KameNoEma", url: "" },
        { name: "Costellazioni KameNoEma", url: "https://databasecostellazioni.github.io/Costellazioni/" },
        

    ],
    "Astronomia Italiani": [
        { name: "Osservatorio di Astrofisica di Bologna", url: "https://www.oas.inaf.it/it/" },
        { name: "Bologna Radioastronomy CNR Institute (IRA)", url: "https://info.ira.inaf.it/" },
        { name: "Osservatorio Astronomico di Brera (Milano)", url: "http://www.brera.mi.astro.it/" },
        { name: "Osservatorio Astronomico di Cagliari", url: "https://www.oa-cagliari.inaf.it/" },
        { name: "Osservatorio Astrofisico di Catania", url: "http://woac.ct.astro.it/" },
        { name: "Osservatorio Astrofisico di Arcetri (Firenze)", url: "https://www.arcetri.inaf.it/" },
        { name: "Osservatorio Astronomico di Capodimonte (Napoli)", url: "http://www.inaf.it/it/sedi/" },
        { name: "Osservatorio Astronomico di Padova", url: "https://www.oapd.inaf.it/" },
        { name: "Osservatorio Astronomico di Palermo", url: "https://www.astropa.inaf.it/" },
        { name: "Osservatorio Astronomico di Roma", url: "https://www.oa-roma.inaf.it/" },
        { name: "Osservatorio Astronomico di Monte Porzio (Roma)", url: "https://www.oa-roma.inaf.it/oar/monte-porzio-catone/" },
        { name: "Osservatorio Astronomico d'Abruzzo", url: "https://www.oa-abruzzo.inaf.it/" },
        { name: "Osservatorio Astronomico di Torino ", url: "https://www.oato.inaf.it/" },
        { name: "Osservatorio Astronomico di Trieste", url: "https://www.oats.inaf.it/index.php/it/" },


    ],
   
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
