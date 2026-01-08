const musica = document.getElementById('musica');
const aceptar = document.getElementById('aceptar');
const terminos = document.getElementById('terminos');

aceptar.onclick = async () => {
  terminos.style.display = 'none';
  musica.volume = 0.4;
  try { await musica.play(); } catch(e) {}
};

window.addEventListener('beforeunload', () => {
  musica.pause();
  musica.currentTime = 0;
});

/* ===== Barra de progreso ===== */
const progreso = document.getElementById('progreso');
window.addEventListener('scroll', () => {
  const altura = document.body.scrollHeight - innerHeight;
  progreso.style.width = (scrollY / altura * 100) + '%';
});