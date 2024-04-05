// Problema 1: Eliminación de Duplicados
// Escribe una función en JavaScript que tome un array como entrada y devuelva un nuevo array con los elementos duplicados eliminados, manteniendo el orden original.

function eliminarDuplicados(array) {
  let newArray = []; //para almacenar elementos unicos del array original

  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      //si el elemento NO esta presente entra al if
      newArray.push(array[i]); //agrega un elemento de (array) al nuevo arreglo con el metodo push
    }
  }
  return newArray;
}

let arrayOriginal = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let arraySinDuplicados = eliminarDuplicados(arrayOriginal);
console.log(arraySinDuplicados);
