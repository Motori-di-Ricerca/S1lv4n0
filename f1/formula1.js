window.addEventListener("DOMContentLoaded", function () {
    const calendarData = [
        {
            id: 24,
            logo: "img/abudhabi.jpg",
            gp: "GP Abu Dhabi",
            data: "5 - 7 dicembre 2025",
            luogo: "Yas Marina Circuit"
        },
        {
            id: 5,
            logo: "img/arabiasaudita.jpg", // correggi da .ipg a .jpg
            gp: "GP Arabia Saudita",
            data: "18 - 20 aprile 2025",
            luogo: "Jeddah Street Circuit"
        },
        {
            id: 1,
            logo: "img/australia.jpg", // correggi da .ipg a .jpg
            gp: "GP Australia",
            data: "14 - 16 marzo 2025",
            luogo: "Albert Park Circuit"
        },
        {
            id: 11,
            logo: "img/austria.jpg", // correggi da .ipg a .jpg
            gp: "GP Austria",
            data: "27 - 29 giugno 2025",
            luogo: "Red Bull Ring"
        },
        {
            id: 17,
            logo: "img/azerbaijan.jpg", // correggi da .ipg a .jpg
            gp: "GP Azerbaijan",
            data: "19 - 21 settembre 2025",
            luogo: "Baku street circuit"
        },
        {
            id: 4,
            logo: "img/bahrain.jpg", // correggi da .ipg a .jpg
            gp: "GP Bahrain",
            data: "11 - 13 aprile 2025",
            luogo: "Bahrain International Circuit"
        },
        {
            id: 13,
            logo: "img/belgio.jpg", // correggi da .ipg a .jpg
            gp: "GP Belgio",
            data: "4 - 6 luglio 2025",
            luogo: "Spa-Francorchamps Circuit"
        },
        {
            id: 21,
            logo: "img/brasile.jpg", // correggi da .ipg a .jpg
            gp: "GP Brasile ",
            data: "7 - 9 anovembre 2025",
            luogo: "Autodromo Interlagos"
        },
        {
            id: 10,
            logo: "img/canada.jpg", // correggi da .ipg a .jpg
            gp: "GP Canada ",
            data: "13 - 15 giugno 2025",
            luogo: "Circuit Gilles Villeneuve"
        },
        {
            id: 2,
            logo: "img/cina.jpg", // correggi da .ipg a .jpg
            gp: "GP Cina",
            data: "21 - 23 marzo 2025",
            luogo: "Shanghai International Circuit"
        },
        {
            id: 3,
            logo: "img/giappone.jpg", // correggi da .ipg a .jpg
            gp: "GP Giappone",
            data: "4 - 6 aprile 2025",
            luogo: "Suzuka Circuit"
        },
        {
            id: 12,
            logo: "img/granbretagna.jpg", // correggi da .ipg a .jpg
            gp: "GP Gran Bretagna",
            data: "04 - 06 luglio 2025",
            luogo: "Silverstone Circuit"
        },
        {
            id: 7,
            logo: "img/italia.jpg", // correggi da .ipg a .jpg
            gp: "GP Emilia Romagna",
            data: "16 - 18 maggio 2025",
            luogo: "Autodromo Imola"
        },
        {
            id: 16,
            logo: "img/italia.jpg", // correggi da .ipg a .jpg
            gp: "GP Italia",
            data: "5 - 7 settembre 2025",
            luogo: "Autodromo Nazionale Monza"
        },
        {
            id: 22,
            logo: "img/lasvegas.jpg", // correggi da .ipg a .jpg
            gp: "GP Las Vegas",
            data: "20 - 22 novembre 2025",
            luogo: "Las Vegas Strip Circuit"
        },
        {
            id: 6,
            logo: "img/maiami.jpg", // correggi da .ipg a .jpg
            gp: "GP Miami",
            data: "2 - 4 maggio 2025",
            luogo: "Miami International Autodrome"
        },
        {
            id: 20,
            logo: "img/messico.jpg", // correggi da .ipg a .jpg
            gp: "GP Messico",
            data: "24 - 26 ottobre 2025",
            luogo: "Autodromo Hermanos Rodriguez"
        },
        {
            id: 8,
            logo: "img/monaco.jpg", // correggi da .ipg a .jpg
            gp: "GP Monaco ",
            data: "23 - 25 maggio 2025",
            luogo: "Monaco Circuit"
        },
        {
            id: 15,
            logo: "img/olanda.jpg", // correggi da .ipg a .jpg
            gp: "GP Olanda",
            data: "29 - 31 agosto 2025",
            luogo: "Circuit Zandvoort"
        },
        {
            id: 23,
            logo: "img/qatar.jpg", // correggi da .ipg a .jpg
            gp: "GP Qatar",
            data: "28 - 30 novembre 2025",
            luogo: "Lusail International Circuit"
        },
        {
            id: 18,
            logo: "img/singapore.jpg", // correggi da .ipg a .jpg
            gp: "GP Singapore",
            data: "3 - 5 ottobre 2025",
            luogo: "Singapore Circuit"
        },
        {
            id: 9,
            logo: "img/spagna.jpg", // correggi da .ipg a .jpg
            gp: "GP Spagna",
            data: "30 maggio - 1 giugno 2025",
            luogo: "Catalunya Circuit"
        },
        {
            id: 14,
            logo: "img/ungheria.jpg", // correggi da .ipg a .jpg
            gp: "GP Ungheria",
            data: "1 - 3 agosto 2025",
            luogo: "	Hungaroring"
        },
        {
            id: 19,
            logo: "img/usa.jpg", // correggi da .ipg a .jpg
            gp: "GP Usa",
            data: "17 - 19 ottobre 2025",
            luogo: "Circuit of The Americas"
        },

    ];

    // Ordina per ID (crescente)
    calendarData.sort((a, b) => a.id - b.id);

    // Dividi in due gruppi da 12
    const firstHalf = calendarData.slice(0, 12);
    const secondHalf = calendarData.slice(12);

    // Seleziona i due tbody
    const tbodyLeft = document.querySelector("#f1-calendar-left tbody");
    const tbodyRight = document.querySelector("#f1-calendar-right tbody");

    // Funzione per popolare una tabella
    function populateTable(data, tbody) {
        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${item.logo}" alt="Logo GP" "></td>
                <td>${item.gp}</td>
                <td>${item.data}</td>
                <td><a href="#" onclick="showImagePopup('${getImageFilenameFromGP(item.gp)}', '${item.luogo}'); return false;">${item.luogo}</a></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Popola entrambe le tabelle
    populateTable(firstHalf, tbodyLeft);
    populateTable(secondHalf, tbodyRight);
});

function getImageFilenameFromGP(gpName) {
    return "img/" + "t" + gpName.toLowerCase().replace("gp ", "").replace(/\s+/g, "") + ".jpg";
}

function showImagePopup(imgSrc, title) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modal.style.display = "flex";
}

// Chiusura modale al click sulla X
document.querySelector(".close-button").addEventListener("click", () => {
    document.getElementById("imageModal").style.display = "none";
});

// Chiusura modale cliccando fuori dal contenuto
window.addEventListener("click", function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});



// GIF footer dinamico
function populateFooterGIFs(gifA, gifB) {
    const footer = document.getElementById('footer-gif-bar');
    footer.innerHTML = '';

    const screenWidth = window.innerWidth;
    const gifWidth = 40;
    const numGifs = Math.ceil(screenWidth / gifWidth);

    for (let i = 0; i < numGifs; i++) {
        const gif = document.createElement('img');
        gif.src = i % 2 === 0 ? gifA : gifB;
        gif.alt = 'Decorazione';
        footer.appendChild(gif);
    }
}

window.addEventListener('load', () => {
    populateFooterGIFs('img/gif06.gif', 'img/gif07.gif');
});

window.addEventListener('resize', () => {
    populateFooterGIFs('img/gif06.gif', 'img/gif07.gif');
});
