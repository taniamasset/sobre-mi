// Función para realizar la operación de la calculadora
function myFunction() {
  // Obtener los valores de los operandos y la operación
  var operando1 = parseFloat(document.getElementById('operando1').value);
  var operando2 = parseFloat(document.getElementById('operando2').value);
  var operacion = document.getElementById('operacion').value;

  // Validar que los operandos sean números válidos
  if (isNaN(operando1) || isNaN(operando2)) {
      alert('Por favor, ingrese números válidos en los operandos.');
      return; // Detener la ejecución de la función
  }

  // Manejo de errores para división por cero
  if (operando2 === 0 && operacion === "dividir") {
      alert('Error, no se puede dividir por cero.');
      return;
  }

  // Realizar la operación matemática correspondiente
  var resultado = 0;
  switch (operacion) {
      case 'sumar':
          resultado = operando1 + operando2;
          break;
      case 'restar':
          resultado = operando1 - operando2;
          break;
      case 'multiplicar':
          resultado = operando1 * operando2;
          break;
      case 'dividir':
          resultado = operando1 / operando2;
          break;
  }

  // Mostrar el resultado en el elemento con id "resultado"
  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = 'Resultado: ' + formatearResultado(resultado);
}

// Función para limpiar los campos de entrada y el resultado
function limpiarCampos() {
  document.getElementById('operando1').value = '';
  document.getElementById('operando2').value = '';
  document.getElementById('operacion').selectedIndex = 0;
  document.getElementById('resultado').textContent = '';
}

// Función para formatear el resultado y manejar errores
function formatearResultado(resultado) {
  console.log(resultado);
  var umbral = 1e15;
  var umbral2 = 1e-15;

  if (resultado > umbral) return 'es demasiado grande';
  if (resultado < -umbral) return 'es demasiado pequeño';
  return resultado.toFixed(2);
}

// Asignar la función myFunction al evento de clic en el botón "Calcular"
document.getElementById("boton-calculadora").addEventListener("click", myFunction);

// Asignar la función limpiarCampos al evento de clic en el botón "Limpiar"
document.getElementById('boton-limpiar').addEventListener('click', limpiarCampos);