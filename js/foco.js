function cambiarImagen() {
  element = document.getElementById('miImagen');
  if (element.src.match("bulbon")) {
    element.src="src/pic_bulboff.gif";
  }
  else {
    element.src="src/pic_bulbon.gif";
  }
}