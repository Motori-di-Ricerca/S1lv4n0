    window.addEventListener("DOMContentLoaded", function () {
        const griglia = document.getElementById("griglia");
        griglia.innerHTML = "";

        const auto = [
            { immagine: "img/alfa.gif", link: "https://www.alfaromeo.it" },
            { immagine: "img/aston.gif", link: "http://www.astonmartin.com/" },
            { immagine: "img/audi.gif", link: "https://www.audi.it/it" },
            { immagine: "img/bmw.gif", link: "http://www.bmw.it/" },
            { immagine: "img/cadillach.gif", link: "http://www.cadillac.com/" },
            { immagine: "img/chevrolet.gif", link: "http://www.chevrolet.it/" },
            { immagine: "img/chrysler.gif", link: "https://www.chrysler.com/" },
            { immagine: "img/citroen.gif", link: "http://www.citroen.it/" },
            { immagine: "img/dacia.gif", link: "https://www.dacia.it/" },
            { immagine: "img/daihatsu.gif", link: "http://www.daihatsu.it/" },
            { immagine: "img/dodge.gif", link: "https://www.dodge.com/" },
            { immagine: "img/ferrari.gif", link: "https://www.ferrari.com/it-IT" },
            { immagine: "img/fiat.gif", link: "http://www.fiat.it/" },
            { immagine: "img/ford.gif", link: "http://www.ford.it/" },
            { immagine: "img/honda.gif", link: "http://www.honda.it/" },
            { immagine: "img/hyundai.gif", link: "https://www.hyundai.com" },
            { immagine: "img/jaguar.gif", link: "http://www.jaguar.it/" },
            { immagine: "img/kia.gif", link: "https://www.kia.com" },
            { immagine: "img/lada.gif", link: "http://www.lada.it/" },
            { immagine: "img/lamborghini.gif", link: "http://www.lamborghini.it/" },
            { immagine: "img/lancia.gif", link: "http://www.lancia.com/" },
            { immagine: "img/landrover.gif", link: "http://www.landrover.com/" },
            { immagine: "img/lexus.gif", link: "http://www.lexus.it/" },
            { immagine: "img/lotus.gif", link: "http://www.lotuscars.com/index.html" },
            { immagine: "img/maserati.gif", link: "http://www.maserati.it/" },
            { immagine: "img/mazda.gif", link: "http://www.mazda.com/" },
            { immagine: "img/mercedes.gif", link: "https://www.mercedes-benz.it" },
            { immagine: "img/mg.gif", link: "https://www.mgmotor.it/" },
            { immagine: "img/mini.gif", link: "https://www.mini.it" },
            { immagine: "img/mitsubishi.gif", link: "https://www.mitsubishi-motors.it/" },
            { immagine: "img/nissan.gif", link: "http://www.nissan.it/" },
            { immagine: "img/opel.gif", link: "http://www.opel.it/" },
            { immagine: "img/peugeot.gif", link: "http://www.peugeot.it/" },
            { immagine: "img/porsche.gif", link: "http://www.porsche.com/" },
            { immagine: "img/renault.gif", link: "http://www.renault.it/" },
            { immagine: "img/seat.gif", link: "http://www.seat.com/" },
            { immagine: "img/skoda.gif", link: "https://www.skoda-auto.it/" },
            { immagine: "img/smart.gif", link: "http://www.smart.com/" },
            { immagine: "img/subaru.gif", link: "http://www.subaru.it/" },
            { immagine: "img/suzuki.gif", link: "http://www.suzuki.it/" },
            { immagine: "img/toyota.gif", link: "http://www.toyota.it/" },
            { immagine: "img/volkswagen.gif", link: "https://www.volkswagen.it" },
            { immagine: "img/volvo.gif", link: "http://www.volvo.com/" },

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


    // Imposta dimensione iniziale
    aggiornaDimensione(select.value);

    // Cambia quando l'utente seleziona
    select.addEventListener("change", function () {
        aggiornaDimensione(this.value);
    });
