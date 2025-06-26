


// La neurona MP (McCulloch-Pitts) es un modelo matemático simple de una neurona artificial. 
// Se usa principalmente con fines educativos para entender cómo funcionan las redes neuronales básicas.

// 🧠 ¿Qué es la neurona MP?
// Una neurona MP:

// Recibe múltiples entradas binarias (0 o 1).

// Suma las entradas ponderadas.

// Compara con un umbral (threshold).

// Si la suma supera el umbral, activa la salida (1), si no, la salida es 0

// El threshold (umbral) en una neurona artificial —como la neurona MP o el perceptrón— es un 
// valor límite que decide si la neurona se activa (sale 1) o no se activa (sale 0).

// es decir que la neurona se activa si la suma de las entradas ponderadas supera el umbral.

// el umbral es el limite si lo pasa se activa la neurona sino no se activa


// una explicacion Simple seria: 

const inputs = [1, 1, 0]; // entradas
const threshold = 2; // umbral

const suma = 1 + 1 + 0;
// suma = 2;
//     2   mayor igual que   2
if ( suma      >=         threshold) {
    console.log("la neurona se activa");
} else {
    console.log("la neurona no se activa");
}

// un ejemplo de codigo seria el siguiente


const neuronaMp = (inputs, threshold) => {
    
    // esta funcion suma acc que es el acomulador con el input y el valor inicial es 0
    const suma = inputs.reduce((acc, input) => acc + input, 0);

    // compara si es mayo o igual al umbral y dependiendo devuelve un boleano 
    return suma >= threshold ? 1 : 0;
}

const inputsValues = [1, 0 , 0];
const thresholdValue = 2;
const result = neuronaMp(inputsValues, thresholdValue);
console.log('result '+ result);

