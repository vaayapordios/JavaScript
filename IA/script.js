// Este script utiliza la libreria brain.js para crear una red neuronal que clasifica flores en base a sus caracteristicas
// las caracteristicas son: largo del sepal, ancho del sepal, largo del petalo y ancho del petalo
// la red neuronal se entrena con datos de flores de la especie Setosa, Versicolor y Virginica
// y posteriormente se utiliza para clasificar flores en base a las caracteristicas ingresadas por el usuario

var network = new brain.NeuralNetwork(); // Inicializa una nueva red neuronal

// Normalizar los datos de entrada para que estén en un rango adecuado
function normalizeData(data) {
return data.map(item => ({
    input: {
      SepalLengthCm: item.input.SepalLengthCm / 10, // Normaliza el largo del sépalo
      SepalWidthCm: item.input.SepalWidthCm / 10,   // Normaliza el ancho del sépalo
      PetalLengthCm: item.input.PetalLengthCm / 10, // Normaliza el largo del pétalo
      PetalWidthCm: item.input.PetalWidthCm / 10    // Normaliza el ancho del pétalo
    },
    output: item.output // Mantiene la salida original
}));
}

// Datos de entrenamiento para la red neuronal
const trainingData = normalizeData([
    // Datos de flores de la especie Setosa
    {input: {SepalLengthCm: 0.51, SepalWidthCm: 0.35, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.49, SepalWidthCm: 0.30, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.47, SepalWidthCm: 0.32, PetalLengthCm: 0.13, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.46, SepalWidthCm: 0.31, PetalLengthCm: 0.15, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.50, SepalWidthCm: 0.36, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.54, SepalWidthCm: 0.39, PetalLengthCm: 0.17, PetalWidthCm: 0.04}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.46, SepalWidthCm: 0.34, PetalLengthCm: 0.14, PetalWidthCm: 0.03}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.50, SepalWidthCm: 0.34, PetalLengthCm: 0.15, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.44, SepalWidthCm: 0.29, PetalLengthCm: 0.14, PetalWidthCm: 0.02}, output: {setosa: 1, versicolor: 0, virginica:0}},
    {input: {SepalLengthCm: 0.49, SepalWidthCm: 0.31, PetalLengthCm: 0.15, PetalWidthCm: 0.01}, output: {setosa: 1, versicolor: 0, virginica:0}},
    
    {input: {SepalLengthCm: 0.64, SepalWidthCm: 0.32, PetalLengthCm: 0.45, PetalWidthCm: 0.15}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.69, SepalWidthCm: 0.31, PetalLengthCm: 0.49, PetalWidthCm: 0.15}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.55, SepalWidthCm: 0.23, PetalLengthCm: 0.40, PetalWidthCm: 0.13}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.65, SepalWidthCm: 0.28, PetalLengthCm: 0.46, PetalWidthCm: 0.15}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.57, SepalWidthCm: 0.28, PetalLengthCm: 0.45, PetalWidthCm: 0.13}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.63, SepalWidthCm: 0.33, PetalLengthCm: 0.47, PetalWidthCm: 0.16}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.49, SepalWidthCm: 0.24, PetalLengthCm: 0.33, PetalWidthCm: 0.10}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.66, SepalWidthCm: 0.29, PetalLengthCm: 0.46, PetalWidthCm: 0.13}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.55, SepalWidthCm: 0.24, PetalLengthCm: 0.37, PetalWidthCm: 0.10}, output: {setosa: 0, versicolor: 1, virginica:0}},
    {input: {SepalLengthCm: 0.60, SepalWidthCm: 0.34, PetalLengthCm: 0.45, PetalWidthCm: 0.16}, output: {setosa: 0, versicolor: 1, virginica:0}},


    {input: {SepalLengthCm: 0.63, SepalWidthCm: 0.33, PetalLengthCm: 0.60, PetalWidthCm: 0.25}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.58, SepalWidthCm: 0.27, PetalLengthCm: 0.51, PetalWidthCm: 0.19}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.71, SepalWidthCm: 0.30, PetalLengthCm: 0.59, PetalWidthCm: 0.21}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.63, SepalWidthCm: 0.29, PetalLengthCm: 0.56, PetalWidthCm: 0.18}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.65, SepalWidthCm: 0.30, PetalLengthCm: 0.58, PetalWidthCm: 0.22}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.76, SepalWidthCm: 0.30, PetalLengthCm: 0.66, PetalWidthCm: 0.21}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.73, SepalWidthCm: 0.29, PetalLengthCm: 0.63, PetalWidthCm: 0.18}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.72, SepalWidthCm: 0.36, PetalLengthCm: 0.61, PetalWidthCm: 0.25}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.65, SepalWidthCm: 0.32, PetalLengthCm: 0.51, PetalWidthCm: 0.20}, output: {setosa: 0, versicolor: 0, virginica:1}},
    {input: {SepalLengthCm: 0.68, SepalWidthCm: 0.30, PetalLengthCm: 0.55, PetalWidthCm: 0.21}, output: {setosa: 0, versicolor: 0, virginica:1}},

]);

// Entrenamiento de la red neuronal con los datos normalizados
network.train(trainingData);

// Función para clasificar la flor basada en las características ingresadas
function classifyFlower(sepalLength, sepalWidth, petalLength, petalWidth) {
var input = {
    SepalLengthCm: sepalLength / 10, // Normaliza el largo del sépalo
    SepalWidthCm: sepalWidth / 10,   // Normaliza el ancho del sépalo
    PetalLengthCm: petalLength / 10, // Normaliza el largo del pétalo
    PetalWidthCm: petalWidth / 10     // Normaliza el ancho del pétalo
};
  var result = network.run(input); // Ejecuta la red neuronal con los datos de entrada

  // Determina la especie de la flor con base en la salida de la red
let max = Math.max(result.setosa, result.versicolor || 0, result.virginica || 0);
if (max === result.setosa) return "Setosa";
if (max === result.versicolor) return "Versicolor";
return "Virginica";
}

// Manejo del evento de clasificación al hacer clic en el botón
document.getElementById('classifyBtn').addEventListener('click', function() {
  // Obtiene los valores ingresados por el usuario
var sepalLength = parseFloat(document.getElementById('sepalLength').value);
var sepalWidth = parseFloat(document.getElementById('sepalWidth').value);
var petalLength = parseFloat(document.getElementById('petalLength').value);
var petalWidth = parseFloat(document.getElementById('petalWidth').value);

  // Verifica si los valores son válidos
if (isNaN(sepalLength) || isNaN(sepalWidth) || isNaN(petalLength) || isNaN(petalWidth)) {
    alert("Por favor, ingresa valores numéricos válidos."); // Mensaje de error
    return;
}

  // Muestra el resultado de la clasificación en el div correspondiente
document.getElementById('result').innerText = "La flor clasificada es: " + classifyFlower(sepalLength, sepalWidth, petalLength, petalWidth);
});