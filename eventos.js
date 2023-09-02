function saludar() {
  alert('¡Hola!');
}

document.addEventListener('DOMContentLoaded', function(event) {
  const divElement = document.getElementById("myButton");
   event.stopPropagation();

  divElement.addEventListener('click', function() {
      alert('Hola! Soy el div');
  });
});