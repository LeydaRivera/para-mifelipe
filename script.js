// ❤️ Texto personalizado
const message = `
Para: Mi Felipe 💜 mi guapo, precioso en increible hombre

Si pudiera elegir un lugar seguro,
sin duda ería a tu lado.

Cuanto más tiempo estoy contigo,
más  feliz y en paz me siento.

— TE QUIERO MUCHO—
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

// 🌳 Corazón matemático
const leavesContainer = document.getElementById("leaves");
leavesContainer.innerHTML = "";

const totalLeaves = 900; // más cantidad = más relleno

for (let i = 0; i < totalLeaves; i++) {
  const leaf = document.createElement("div");
  leaf.classList.add("heart-leaf");

  let x, y;

  do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
  } while (!isInsideHeart(x, y));

  // Ajuste más compacto
  leaf.style.left = 150 + x * 95 + "px";
  leaf.style.top = 150 - y * 95 + "px";

  leaf.style.animationDelay = i * 0.002 + "s";

  leavesContainer.appendChild(leaf);
}

function isInsideHeart(x, y) {
  return Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y <= 0;
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
const startDate = new Date("2026-02-02T00:00:00"); // cambia año si es necesario

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
