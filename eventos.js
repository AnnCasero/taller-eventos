function saludar() {
  alert('¡Hola!');
}

document.addEventListener('DOMContentLoaded', function() {
  const divElement = document.getElementById("myButton");

  divElement.addEventListener('click', function() {
      alert('Hola! Soy el div');
  });
});