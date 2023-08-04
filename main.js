// Esta función calcula el resultado de la calculadora
function calcular() {

  // Obtenemos los elementos del formulario que contienen los datos del usuario
  let agua = document.getElementById("water-input").value; // Litros de agua al día
  let energia = document.getElementById("energy-input").value; // kWh de energía eléctrica al mes
  let transporte = document.getElementById("transport-input").value; // Medio de transporte habitual
  let distancia = document.getElementById("distance-input").value; // Km recorridos al día
  let organico = document.getElementById("organic-input").checked; // Si genera residuos orgánicos o no
  let papel = document.getElementById("paper-input").checked; // Si genera residuos de papel y cartón o no
  let plastico = document.getElementById("plastic-input").checked; // Si genera residuos de plástico o no
  let metal = document.getElementById("metal-input").checked; // Si genera residuos de metal o no
  let vidrio = document.getElementById("glass-input").checked; // Si genera residuos de vidrio o no
  let residuo = document.getElementById("waste-input").value; // Kg de residuos al día

  // Convertimos los valores a números para poder operar con ellos
  agua = Number(agua);
  energia = Number(energia);
  transporte = Number(transporte);
  distancia = Number(distancia);
  residuo = Number(residuo);

  // Estos son los factores de conversión para cada tipo de impacto ambiental
  // Están expresados en kilogramos de dióxido de carbono equivalente (kg CO2e) por unidad de medida
  const factorAgua = 0.0003; // kg CO2e por litro de agua
  const factorEnergia = 0.233; // kg CO2e por kWh de energía eléctrica
  const factoresTransporte = [0, 0, 0.104, 0.271, 0.254]; // kg CO2e por km recorrido según el medio de transporte
  const factoresResiduo = [0.25, -1, -1.1, -3.8, -0.4]; // kg CO2e por kg de residuo según el tipo

  // Esta es la variable que almacenará el resultado final de la calculadora
  let resultado = 0;

  // Esta es la variable que almacenará el mensaje que se mostrará al usuario
  let mensaje = "";

  // Se calcula el impacto ambiental del consumo de agua
  resultado += agua * factorAgua;

// Se calcula el impacto ambiental del consumo de energía
resultado += energia * factorEnergia;

// Se calcula el impacto ambiental del transporte
resultado += transporte * distancia * factoresTransporte[transporte];

// Se calcula el impacto ambiental de los residuos
if (organico) {
resultado += residuo * factoresResiduo[0];
}
if (papel) {
resultado += residuo * factoresResiduo[1];
}
if (plastico) {
resultado += residuo * factoresResiduo[2];
}
if (metal) {
resultado += residuo * factoresResiduo[3];
}
if (vidrio) {
resultado += residuo * factoresResiduo[4];
}

// Se redondea el resultado a dos decimales
resultado = resultado.toFixed(2);

// Se genera el mensaje según el resultado obtenido
if (resultado < 0) {
mensaje = "¡Felicidades! Tu huella ecológica es negativa, lo que significa que estás contribuyendo a reducir las emisiones de gases de efecto invernadero.";
} else if (resultado == 0) {
mensaje = "Tu huella ecológica es nula, lo que significa que no estás generando ni reduciendo las emisiones de gases de efecto invernadero.";
} else {
mensaje = "Tu huella ecológica es de " + resultado + " kg CO2e al día, lo que significa que estás generando una cantidad de gases de efecto invernadero que afectan al cambio climático. Te recomendamos que adoptes hábitos más sostenibles para reducir tu impacto ambiental.";
}

// Se muestra el resultado y el mensaje en el div correspondiente
document.getElementById("result").innerHTML = "Resultado: " + resultado + " kg CO2e al día. <br>" + mensaje;
}

// Esta es la función que se ejecuta cuando la página se carga
function iniciar() {
// Se asignan valores aleatorios a los elementos del formulario para simular un usuario
document.getElementById("water-input").value = Math.floor(Math.random() * 100);
document.getElementById("energy-input").value = Math.floor(Math.random() * 500);
document.getElementById("transport-input").value = Math.floor(Math.random() * 5);
document.getElementById("distance-input").value = Math.floor(Math.random() * 50);
document.getElementById("organic-input").checked = Math.random() < 0.5;
document.getElementById("paper-input").checked = Math.random() < 0.5;
document.getElementById("plastic-input").checked = Math.random() < 0.5;
document.getElementById("metal-input").checked = Math.random() < 0.5;
document.getElementById("glass-input").checked = Math.random() < 0.5;
document.getElementById("waste-input").value = Math.floor(Math.random() * 10);

// Se llama a la función calcular() para obtener el resultado inicial
calcular();
}

// Se llama a la función iniciar() cuando la página se carga
window.onload = iniciar;
