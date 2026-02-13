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
// 🌳 Corazón animado creciendo poco a poco
const leavesContainer = document.getElementById("leaves");
leavesContainer.innerHTML = "";

const centerX = 130;
const centerY = 160; // bajamos el corazón
const scale = 90;
const totalLeaves = 450;

let created = 0;

function growHeart() {
  if (created >= totalLeaves) return;

  let x = Math.random() * 2 - 1;
  let y = Math.random() * 2 - 1;

  let heart = Math.pow(x * x + y * y - 0.8, 3) - x * x * y * y * y;

  if (heart <= 0) {
    const leaf = document.createElement("div");
    leaf.classList.add("heart-leaf");

   leaf.style.left = centerX + x * scale + "px";
   leaf.style.top = centerY - y * scale + "px";

    let size = 7 + Math.random() * 6;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    // 🎨 Degradado rojo natural
    const hue = 0; // rojo
    const lightness = 45 + Math.random() * 25;
    leaf.style.background = `hsl(${hue}, 85%, ${lightness}%)`;

    leaf.style.opacity = 0;
    leaf.style.transition = "opacity 0.6s ease";

    leavesContainer.appendChild(leaf);

    setTimeout(() => {
      leaf.style.opacity = 1;
    }, 50);

    created++;
  }

  requestAnimationFrame(growHeart);
}

growHeart();

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

