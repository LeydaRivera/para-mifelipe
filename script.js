// =============================
// 🌳 CORAZÓN RELLENO (ÁRBOL)
// =============================

const leavesContainer = document.getElementById("leaves");
const totalLeaves = 500;

for (let i = 0; i < totalLeaves; i++) {

    const leaf = document.createElement("div");
    leaf.classList.add("heart-leaf");

    let x, y;

    do {
        x = (Math.random() * 2 - 1);
        y = (Math.random() * 2 - 1);
    } while (!isInsideHeart(x, y));

    leaf.style.left = (140 + x * 120) + "px";
    leaf.style.top = (140 - y * 120) + "px";
    leaf.style.animationDelay = (i * 0.005) + "s";

    leavesContainer.appendChild(leaf);
}

function isInsideHeart(x, y) {
    return Math.pow(x*x + y*y - 1, 3) - x*x*y*y*y <= 0;
}


// =============================
// ⌨️ EFECTO MÁQUINA DE ESCRIBIR
// =============================

const text = `Para el amor de mi vida, Felipe 💜

Si pudiera elegir un lugar seguro,
sería a tu lado.

Cuanto más tiempo estoy contigo,
más te amo.

— Te Amo —`;

const textElement = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();


// =============================
// ⏳ CONTADOR DESDE 2 FEBRERO
// =============================

const startDate = new Date("2025-02-02T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("counter").innerHTML =
        `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();
