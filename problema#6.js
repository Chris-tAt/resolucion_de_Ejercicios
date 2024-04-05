// Problema 6: Generador de Secuencias de Fibonacci
// Escribe una función en JavaScript que genere los primeros N números de la secuencia de Fibonacci, donde N es un número dado. Utiliza una implementación eficiente y sin recursión para evitar el desbordamiento de pila.

// function generateFibonacci(n) {

// }

// // Ejemplo de uso
// const n = 10;
// console.log(generateFibonacci(n)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function generateFibonacci(n) {
  if (n <= 0) return []; // no hay secuencia devuelve un [] vacio

  const fibonacciSequence = [0, 1]; // se inicia con los primeros 2 numeros de la secuencia de fibo

  for (let i = 2; i < n; i++) {
    //se itera a partir del tercer numero (2) hasta el n (n no se incluye)
    const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; //se suman ls dos numeros anteriores (-1 y -2 de la secuencia)(osea si esta en la secuencia 5, se suma 4 (-1) + 3(-2) )
    fibonacciSequence.push(nextFibonacci); // el numero que da en la suma anterior se va agregando al final del array con el metodo push
  }

  return fibonacciSequence;
}

const n = 10;
console.log(generateFibonacci(n));
