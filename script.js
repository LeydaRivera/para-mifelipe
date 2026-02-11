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

for (let i = 0; i < 150; i++) {
  const leaf = document.createElement("div");
  leaf.classList.add("heart-leaf");

  const angle = Math.random() * Math.PI * 2;
  const radius = 100 * (1 - Math.sin(angle));

  const x = radius * Math.cos(angle);
  const y = -radius * Math.sin(angle);

  leaf.style.left = 120 + x + "px";
  leaf.style.top = 120 + y + "px";
  leaf.style.animationDelay = i * 0.02 + "s";

  leavesContainer.appendChild(leaf);
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

