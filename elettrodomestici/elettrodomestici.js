window.addEventListener("DOMContentLoaded", function () {
    const griglia = document.getElementById("griglia");
    const griglia2 = document.getElementById("griglia2");

    griglia.innerHTML = "";
    griglia2.innerHTML = "";

    const elettrodomestici = [
        { immagine: "img/aiwa.gif", link: "https://eu-aiwa.com/it/" },
        { immagine: "img/ariete.gif", link: "http://www.ariete.net/" },
        { immagine: "img/ariston.gif", link: "http://www.merloni.com/" },
        { immagine: "img/bosh.gif", link: "http://www.bosch.it/" },
        { immagine: "img/bticino.gif", link: "http://www.bticino.it/" },
        { immagine: "img/candi.gif", link: "http://www.candy.it/" },
        { immagine: "img/delonghi.gif", link: "http://www.delonghi.it/" },
        { immagine: "img/fujitsu.gif", link: "http://www.fujitsu.com/" },
        { immagine: "img/grundig.gif", link: "https://www.grundig.com/it-it" },
        { immagine: "img/hitachi.gif", link: "http://www.hitachi.com/" },
        { immagine: "img/indesit.jpg", link: "https://www.indesit.it/" },
        { immagine: "img/irradio.gif", link: "https://www.melchioni-ready.com/" },
        { immagine: "img/jvc.gif", link: "http://www.jvcitalia.it/" },
        { immagine: "img/lg.gif", link: "https://www.lg.com" },
        { immagine: "img/moulinex.gif", link: "http://www.moulinex.com/" },
        { immagine: "img/panasonic.gif", link: "http://www.panasonic.it/HPFlash/Default.asp" },
        { immagine: "img/philips.gif", link: "http://www.philips.it/" },
        { immagine: "img/pioneer.gif", link: "http://www.pioneer.it/" },
        { immagine: "img/rex.gif", link: "http://www.rex.zanussi.it/" },
        { immagine: "img/samsung.gif", link: "http://www.samsung.com/it" },
        { immagine: "img/sharp.gif", link: "http://www.sharp.it/" },
        { immagine: "img/sony.gif", link: "http://www.sony.it/" },
        { immagine: "img/thomson.gif", link: "https://tv.mythomson.com/it" },
        { immagine: "img/whirpool.gif", link: "https://www.whirlpool.it" },
       
        // Aggiungi altre immagini manualmente...

    ];

    const telefonia = [
        { immagine: "img/zhtc.gif", link: "http://www.htc.com/it/" },
        { immagine: "img/znokia.gif", link: "http://www.nokia.it/" },
        { immagine: "img/zoppo.gif", link: "https://www.oppo.com/it/" },
        { immagine: "img/zxiaomi.gif", link: "https://www.mi.com" },
        // ...altri...
    ];
    function creaGriglia(elementoGriglia, lista) {
        lista.forEach(item => {
            const cella = document.createElement("div");
            cella.className = "cella";

            const link = document.createElement("a");
            link.href = item.link;

            const img = document.createElement("img");
            img.src = item.immagine;
            img.alt = "";

            link.appendChild(img);
            cella.appendChild(link);
            elementoGriglia.appendChild(cella);
        });
    }

    creaGriglia(griglia, elettrodomestici);
    creaGriglia(griglia2, telefonia);
});
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