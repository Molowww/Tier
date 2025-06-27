window.addEventListener('load', () => {
  const tabActivo = document.querySelector('.mode-tab.active');
  if (tabActivo) {
    const modo = tabActivo.dataset.mode;
    const contenidoMostrar = document.getElementById(modo);

    // Mostrar el contenido con animación inicial
    if (contenidoMostrar) {
      contenidoMostrar.style.display = 'block';
      contenidoMostrar.classList.add('cuadro-animar');

      // Quitar animación después de reproducirse
      contenidoMostrar.addEventListener('animationend', () => {
        contenidoMostrar.classList.remove('cuadro-animar');
      }, { once: true });
    }
  }
});
