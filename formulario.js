document.addEventListener('DOMContentLoaded', function () {
  // Obtén una referencia al formulario
  var colorForm = document.forms['colorForm'];

  // Agrega un eventListener para el cambio en el formulario de radio button
  colorForm.addEventListener('change', function () {
    // Obtén el valor seleccionado
    var colorSeleccionado = colorForm.elements['color'].value;

    // Verifica si el color seleccionado es "rojo"
    if (colorSeleccionado === 'rojo') {
      // Muestra una alerta si es "rojo"
      alert('¡Seleccionaste el color rojo!');
    }
    else if (colorSeleccionado === 'azul') {
      // Muestra una alerta si es "rojo"
      alert('¡Seleccionaste el color azul!');
    }
    else if(colorSeleccionado === 'verde') {
      // Muestra una alerta si es "rojo"
      alert('¡Seleccionaste el color verde!');
    
    }
  });
});

  