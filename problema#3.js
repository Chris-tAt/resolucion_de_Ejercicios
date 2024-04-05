//Problema 3: Suma de Pares
// Escribe una función en JavaScript que tome un array de números como entrada y devuelva la suma de todos los pares distintos dentro del array.

function sumaPares(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      //se verifica si el residuo del elemento es cero quiere decir que es divisible por 2 por lo tanto es par
      suma = suma + array[i];
    }
  }
  return suma;
}

let sumar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let buscarSumarPar = sumaPares(sumar);

console.log(buscarSumarPar);
