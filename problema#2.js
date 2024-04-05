// Problema 2: Comprobación de Anagramas
// Escribe una función en JavaScript que tome dos strings como entrada y devuelva true si son anagramas, false en caso contrario. Ignora los espacios y considera que las letras mayúsculas y minúsculas son equivalentes.

function comprobarAnagrama(palabra1, palabra2) {
  palabra1 = palabra1.replace(/\s+/g, "").toLowerCase(); // no toma en cuenta espacios y convierte en minuscula
  palabra2 = palabra2.replace(/\s+/g, "").toLowerCase();

  if (palabra1.length !== palabra2.length) {
    // si no tienen el mismo tamaño en longitud entonces no son anagramas
    return false;
  }

  let palabra1Ordenada = palabra1.split("").sort().join(""); //split divide, sort ordena y join une
  let palabra2Ordenada = palabra2.split("").sort().join("");

  return palabra1Ordenada === palabra2Ordenada;
}

let resultado = comprobarAnagrama("Rata", " atar");
console.log(resultado);
