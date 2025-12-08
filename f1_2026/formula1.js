window.addEventListener("DOMContentLoaded", function () {
    const calendarData = [
        {
            id: 25,
            logo: "img/abudhabi.jpg",
            gp: "GP Abu Dhabi",
            data: "4 - 6 dicembre 2026",
            luogo: "Yas Marina Circuit",
        },
        {
            id: 5,
            logo: "img/arabiasaudita.jpg",
            gp: "GP Arabia Saudita",
            data: "17 - 19 aprile 2026",
            luogo: "Jeddah Street Circuit",
        },
        {
            id: 1,
            logo: "img/australia.jpg",
            gp: "GP Australia",
            data: "6 - 8 marzo 2026",
            luogo: "Albert Park Circuit"
        },
        {
            id: 11,
            logo: "img/austria.jpg",
            gp: "GP Austria",
            data: "26 - 28 giugno 2026",
            luogo: "Red Bull Ring"
        },
        {
            id: 18,
            logo: "img/azerbaijan.jpg",
            gp: "GP Azerbaijan",
            data: "24 - 26 settembre 2026",
            luogo: "Baku street circuit"
        },
        {
            id: 4,
            logo: "img/bahrain.jpg",
            gp: "GP Bahrain",
            data: "10 - 12 aprile 2026",
            luogo: "Bahrain International Circuit"
        },
        {
            id: 13,
            logo: "img/belgio.jpg",
            gp: "GP Belgio",
            data: "17 - 19 luglio 2026",
            luogo: "Spa-Francorchamps Circuit"
        },
        {
            id: 22,
            logo: "img/brasile.jpg",
            gp: "GP Brasile ",
            data: "6 - 8 novembre 2026",
            luogo: "Autodromo Interlagos"
        },
        {
            id: 8,
            logo: "img/canada.jpg",
            gp: "GP Canada ",
            data: "22 - 24 maggio 2026",
            luogo: "Circuit Gilles Villeneuve",
            sprint: true
        },
        {
            id: 2,
            logo: "img/cina.jpg",
            gp: "GP Cina",
            data: "13 - 15 marzo 2026",
            luogo: "Shanghai International Circuit"
        },
        {
            id: 3,
            logo: "img/giappone.jpg",
            gp: "GP Giappone",
            data: "27 - 29 marzo 2026",
            luogo: "Suzuka Circuit"
        },
        {
            id: 12,
            logo: "img/granbretagna.jpg",
            gp: "GP Gran Bretagna",
            data: "3 - 5 luglio 2026",
            luogo: "Silverstone Circuit",
            sprint: true
        },
        {
            id: 16,
            logo: "img/italia.jpg",
            gp: "GP Italia",
            data: "4 - 6 settembre 2026",
            luogo: "Autodromo Nazionale Monza"
        },
        {
            id: 23,
            logo: "img/lasvegas.jpg",
            gp: "GP Las Vegas",
            data: "19 - 21 novembre 2026",
            luogo: "Las Vegas Strip Circuit"
        },
        {
            id: 17,
            logo: "img/spagna.jpg",
            gp: "GP Madrid",
            data: "11 - 13 settembre 2026",
            luogo: "Circuito de Madring"
        },
        {
            id: 6,
            logo: "img/maiami.jpg",
            gp: "GP Miami",
            data: "1 - 3 maggio 2026",
            luogo: "Miami International Autodrome",
            sprint: true
        },
        {
            id: 21,
            logo: "img/messico.jpg",
            gp: "GP Messico",
            data: "30 ottobre - 1 novembre 2026",
            luogo: "Autodromo Hermanos Rodriguez"
        },
        {
            id: 9,
            logo: "img/monaco.jpg",
            gp: "GP Monaco ",
            data: "5 - 7 giugno 2026",
            luogo: "Monaco Circuit"
        },
        {
            id: 15,
            logo: "img/olanda.jpg",
            gp: "GP Olanda",
            data: "21 - 23 agosto 2026",
            luogo: "Circuit Zandvoort",
            sprint: true
        },
        {
            id: 24,
            logo: "img/qatar.jpg",
            gp: "GP Qatar",
            data: "27 - 29 novembre 2026",
            luogo: "Lusail International Circuit"
        },
        {
            id: 19,
            logo: "img/singapore.jpg",
            gp: "GP Singapore",
            data: "9 -11 ottobre 2026",
            luogo: "Singapore Circuit",
            sprint: true
        },
        {
            id: 10,
            logo: "img/spagna.jpg",
            gp: "GP Spagna",
            data: "12 - 14 giugno 2026",
            luogo: "Catalunya Circuit"
        },
        {
            id: 14,
            logo: "img/ungheria.jpg",
            gp: "GP Ungheria",
            data: "24 - 26 luglio 2026",
            luogo: "Hungaroring"
        },
        {
            id: 20,
            logo: "img/usa.jpg",
            gp: "GP Usa",
            data: "23 - 25 ottobre 2026",
            luogo: "Circuit of The Americas"
        }
    ];

    calendarData.sort((a, b) => a.id - b.id);

    const container = document.querySelector(".calendar-container");

    const leftTable = document.createElement("table");
    const rightTable = document.createElement("table");

    const createHeader = () => {
        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>Stato</th>
                <th>Gran Premio</th>
                <th>Data</th>
                <th>Tracciato</th>
            </tr>
        `;
        return thead;
    };

    leftTable.appendChild(createHeader());
    rightTable.appendChild(createHeader());

    const leftBody = document.createElement("tbody");
    const rightBody = document.createElement("tbody");

    calendarData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${item.logo}" alt="Bandiera ${item.gp}" style="height:25px;"/></td>
     <td>
    ${item.gp}
    ${item.sprint ? `<img src="img/sprint.jpg" alt="Sprint" style="height:14px; margin-left:2px; vertical-align:middle;">` : ""}
</td>

            <td>${item.data}</td>
            <td><a href="#" onclick="showImagePopup('${getImageFilenameFromGP(item.gp)}', '${item.luogo}'); return false;">
                ${item.luogo}
            </a></td>
        `;

        if (index < calendarData.length / 2) {
            leftBody.appendChild(tr);
        } else {
            rightBody.appendChild(tr);
        }
    });

    leftTable.appendChild(leftBody);
    rightTable.appendChild(rightBody);

    container.appendChild(leftTable);
    container.appendChild(rightTable);
});
    function getImageFilenameFromGP(gpName) {
        return "img/" + "t" + gpName.toLowerCase().replace("gp ", "").replace(/\s+/g, "") + ".jpg";
    }


function getImageFilenameFromGP(gpName) {
    return "img/t" + gpName.toLowerCase().replace("gp ", "").replace(/\s+/g, "") + ".jpg";
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
