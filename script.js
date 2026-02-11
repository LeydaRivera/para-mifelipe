const leavesContainer = document.getElementById("leaves");

const totalLeaves = 400; // más cantidad = más relleno

for (let i = 0; i < totalLeaves; i++) {

    const leaf = document.createElement("div");
    leaf.classList.add("heart-leaf");

    let x, y;
    let scale = 10;

    // Generar puntos hasta que estén dentro del corazón
    do {
        x = (Math.random() * 2 - 1);
        y = (Math.random() * 2 - 1);
    } while (!isInsideHeart(x, y));

    leaf.style.left = (120 + x * 110) + "px";
    leaf.style.top = (120 - y * 110) + "px";
    leaf.style.animationDelay = (i * 0.01) + "s";

    leavesContainer.appendChild(leaf);
}

// Fórmula corazón relleno
function isInsideHeart(x, y) {
    return Math.pow(x*x + y*y - 1, 3) - x*x*y*y*y <= 0;
}
