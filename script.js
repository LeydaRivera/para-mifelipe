// ❤️ Texto personalizado
const message = `
Para: Mi Felipe 💜 mi guapo, precioso e increíble hombre

Si pudiera elegir un lugar seguro,
sin duda sería a tu lado.

Cuanto más tiempo estoy contigo,
más feliz y en paz me siento.

— TE QUIERO MUCHO —
`;

let i = 0;
const speed = 40;
const container = document.getElementById("typed");

function typeWriter() {
  if (i < message.length) {
    container.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// 🌳 Corazón matemático centrado
const leavesContainer = document.getElementById("leaves");
leavesContainer.innerHTML = "";

const center = 150; // centro real del contenedor 300x300
const scale = 120; // tamaño del corazón
const totalLeaves = 900;

let created = 0;

while (created < totalLeaves) {
  let x = Math.random() * 2 - 1;
  let y = Math.random() * 2 - 1;

  // Fórmula del corazón
  let heart = Math.pow(x * x + y * y - 0.8, 3) - x * x * y * y * y;

  if (heart <= 0) {
    const leaf = document.createElement("div");
    leaf.classList.add("heart-leaf");

    leaf.style.left = center + x * scale + "px";
    leaf.style.top = center - y * scale + "px";

    // Tamaño aleatorio
    let size = 6 + Math.random() * 6;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    // Tonos rojos
    const colors = ["#ff1a1a", "#e60026", "#ff4d4d", "#cc0022"];
    leaf.style.background = colors[Math.floor(Math.random() * colors.length)];

    leavesContainer.appendChild(leaf);
    created++;
  }
}

// 💜 Corazones cayendo
const falling = document.querySelector(".falling-hearts");

function createFallingHeart() {
  let heart = document.createElement("div");
  heart.classList.add("fall");

  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  falling.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createFallingHeart, 400);

// ⏳ Contador desde 2 de febrero
const startDate = new Date("2026-02-02T00:00:00");

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("time").innerText =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateTime, 1000);
updateTime();
