// ❤️ Texto personalizado con efecto de escritura
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

// 🌳 Corazón más ancho, definido y menos tupido
const leavesContainer = document.getElementById("leaves");
leavesContainer.innerHTML = "";

const centerX = 210;
const centerY = 230;
const scale = 170;      // más grande
const totalLeaves = 300; // menos tupido

let created = 0;

function growHeart() {
  if (created >= totalLeaves) return;

  // Más ancho horizontal
  let x = Math.random() * 2.4 - 1.2;
  let y = Math.random() * 2.4 - 1.2;

  // Fórmula clásica REAL del corazón
  let heartShape = Math.pow(x*x + y*y - 1, 3) - x*x*y*y*y;

  if (heartShape <= 0) {
    const leaf = document.createElement("div");
    leaf.classList.add("heart-leaf");

    leaf.style.left = centerX + x * scale + "px";
    leaf.style.top = centerY - y * scale + "px";

    let size = 8 + Math.random() * 6;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    // Rojo degradado natural
    const lightness = 50 + Math.random() * 20;
    leaf.style.background = `hsl(0, 85%, ${lightness}%)`;

    leaf.style.opacity = 0;
    leaf.style.transition = "opacity 0.6s ease";

    leavesContainer.appendChild(leaf);

    setTimeout(() => {
      leaf.style.opacity = 1;
    }, 30);

    created++;
  }

  requestAnimationFrame(growHeart);
}

growHeart();

  

    

// 💜 Lluvia de corazones constante
const falling = document.querySelector(".falling-hearts");

function createFallingHeart() {
  let heart = document.createElement("div");
  heart.classList.add("fall");

  heart.style.left = Math.random() * 100 + "%";
  // Duración aleatoria para que se vea natural
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  falling.appendChild(heart);

  // Limpieza para que la página no se ponga lenta
  setTimeout(() => heart.remove(), 7000);
}

setInterval(createFallingHeart, 400);

// ⏳ Contador preciso desde el 2 de febrero
const startDate = new Date("2026-02-02T00:00:00");

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  // Si por alguna razón la fecha es futura, mostramos ceros
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

