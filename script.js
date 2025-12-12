const BIN_ID = "6938bf13d0ea881f401e3735";
const API_KEY = "$2a$10$CAVCHZsnLuFy.mPUgCZp5eUY8rEJ7SY2xLeYifcsTeT7Gbkmrk4YW";

const linkList = document.getElementById("linkList");
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = () => {
    sideMenu.style.left = sideMenu.style.left === "0px" ? "-200px" : "0px";
};

async function carregarLinks() {
    const req = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY }
    });

    const data = await req.json();
    const links = data.record;

    linkList.innerHTML = "";

    links.forEach(item => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<b>${item.nome}</b>`;
        card.onclick = () => window.open(item.url, "_blank");
        linkList.appendChild(card);
    });
}

carregarLinks();
