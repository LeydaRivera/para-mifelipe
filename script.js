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

// 🌳 Corazón matemático centrado (Árbol de corazones)
const leavesContainer = document.getElementById("leaves");
leavesContainer.innerHTML = "";

const center = 130; // Centro relativo al contenedor
const scale = 95;  // Tamaño del árbol
const totalLeaves = 450; // Cantidad de hojitas

let created = 0;

function growHeart() {
  if (created >= totalLeaves) return;

  let x = Math.random() * 2 - 1;
  let y = Math.random() * 2 - 1;

  // Fórmula matemática para dar forma de corazón al árbol
  let heartShape = Math.pow(x * x + y * y - 0.8, 3) - x * x * y * y * y;

  if (heartShape <= 0) {
    const leaf = document.createElement("div");
    leaf.classList.add("heart-leaf");

    // Posicionamiento basado en la fórmula
    leaf.style.left = center + x * scale + "px";
    leaf.style.top = center - y * scale + "px";

    let size = 6 + Math.random() * 8;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    // 🎨 Colores de las hojas (Tonos rojizos/rosados)
    const lightness = 45 + Math.random() * 25;
    leaf.style.background = `hsl(340, 85%, ${lightness}%)`;

    leaf.style.opacity = 0;
    leaf.style.transition = "opacity 0.8s ease";

    leavesContainer.appendChild(leaf);

    setTimeout(() => {
      leaf.style.opacity = 1;
    }, 50);

    created++;
  }

  // Animación suave de crecimiento
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
