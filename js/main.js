function mostrarPantalla(id) {
  //Ocultar pantallas
  document.querySelectorAll('.pantalla')
    .forEach(p => p.classList.remove('active'));

  //Mostrar pantalla
  document.getElementById(id).classList.add('active');
}