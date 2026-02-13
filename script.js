// ❤️ Texto personalizado
const message = `
Para: Mi Felipe 💜 mi guapo, precioso e increíble hombre

Si pudiera elegir un lugar seguro,
sin duda sería a tu lado.

Cuanto más tiempo estoy contigo,
más feliz y en paz me siento.

— TE QUIERO MUCHO —
`;

 // CONFIGURACIÓN: Año, Mes (0-11), Día, Hora, Minuto
// Ejemplo: 20 de Mayo de 2024 -> (2024, 4, 20, 0, 0, 0)
const fechaInicio = new Date(2026, 2, 02, 0, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const segundosTotales = Math.floor(diferencia / 1000);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const horasTotales = Math.floor(minutosTotales / 60);
    
    const dias = Math.floor(horasTotales / 24);
    const horas = horasTotales % 24;
    const minutos = minutosTotales % 60;
    const segundos = segundosTotales % 60;

    document.getElementById('counter').innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
