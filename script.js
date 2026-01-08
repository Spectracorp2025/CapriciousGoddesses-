const boton = document.getElementById("aceptar");
const modal = document.getElementById("terminos");
const musica = document.getElementById("musica");

const claveCorrecta = "G7k9pZ2wR8mQ3vX5tY1eL0bN4cH6jU9";
const desbloquear = document.getElementById("desbloquear");
const mensaje = document.getElementById("mensaje");

let aceptado = false;

boton.addEventListener("click", () => {
    modal.style.display = "none";
    musica.currentTime = 0;
    musica.play();
    aceptado = true;
});

// Cuando el usuario sale de la pestaña
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        musica.pause();
        musica.currentTime = 0;
    } else {
        if (aceptado) {
            musica.play();
        }
    }
});

// Cuando el usuario cierra o recarga
window.addEventListener("beforeunload", () => {
    musica.pause();
    musica.currentTime = 0;
});

desbloquear.addEventListener("click", () => {
    const clave = prompt("Ingresa tu clave de compra:");
    if (clave === claveCorrecta) {
        window.location.href = "libro1/index.html";
    } else {
        mensaje.textContent = "Clave incorrecta o libro no adquirido.";
    }
});