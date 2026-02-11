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
const leaves = document.querySelector(".leaves");

let delay = 0;
for (let t = 0; t < Math.PI * 2; t += 0.15) {
  let x = 16 * Math.pow(Math.sin(t), 3);
  let y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  let heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = x * 6 + 100 + "px";
  heart.style.top = -y * 6 + 100 + "px";
  heart.style.animationDelay = delay + "s";

  leaves.appendChild(heart);

  delay += 0.03;
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
