const aceptar = document.getElementById("aceptar");
const modal = document.getElementById("terminos");
const musica = document.getElementById("musica");

let iniciado = false;

aceptar.onclick = async () => {
  modal.style.display = "none";
  musica.currentTime = 0;
  try { await musica.play(); } catch(e) {}
  iniciado = true;
};

document.addEventListener("visibilitychange", () => {
  if (document.hidden) musica.pause();
  else if (iniciado) musica.play();
});

window.addEventListener("beforeunload", () => musica.pause());