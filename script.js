// ❤️ Texto con efecto escritura
const message = `
Para: Mi Felipe 💜 mi precioso e increíble hombre

Si pudiera elegir un lugar seguro,
sin duda sería a tu lado.
Cuanto más tiempo estoy contigo,
más feliz y en paz me siento.
No solo quiero que seas mi San Valentin, si no mi compañero
de vida.

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
  } else {
    growHeart(); // empieza el corazón cuando termina el texto
  }
}
typeWriter();


// ❤️ CORAZÓN MÁS ANCHO Y MENOS TUPIDO
const leavesContainer = document.getElementById("leaves");

let centerX;
let centerY;
let scale;
let totalLeaves = 240;

// Ajuste dinámico según tamaño
if (window.innerWidth < 768) {
  centerX = 115;
  centerY = 120;
  scale = 90;
} else {
  centerX = 150;
  centerY = 160;
  scale = 120;
}

let created = 0;

function growHeart() {
  if (created >= totalLeaves) return;

  let x = Math.random() * 2.8 - 1.4;
  let y = Math.random() * 2.6 - 1.3;

  let heartShape = Math.pow(x*x + y*y - 1, 3) - x*x*y*y*y;

  if (heartShape <= 0) {
    const leaf = document.createElement("div");
    leaf.classList.add("heart-leaf");

    leaf.style.left = centerX + x * scale + "px";
    leaf.style.top = centerY - y * scale + "px";

    let size = 10 + Math.random() * 6;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    const lightness = 55 + Math.random() * 20;
    leaf.style.background = `hsl(0, 85%, ${lightness}%)`;

    leavesContainer.appendChild(leaf);
    created++;
  }

  requestAnimationFrame(growHeart);
}


// 💜 Lluvia de corazones
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


// ⏳ Contador
const startDate = new Date("2026-02-02T00:00:00");

function updateTime() {
  const now = new Date();
  const diff = now - startDate;
  const safeDiff = diff > 0 ? diff : 0;

  const days = Math.floor(safeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((safeDiff / 1000) % 60);

  document.getElementById("time").innerText =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateTime, 1000);
updateTime();




