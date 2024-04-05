// Problema 4: Suma de Pares con Validaciones y Filtros en Objetos
// Supongamos que tenemos un array de objetos que representan transacciones financieras. Cada objeto tiene la siguiente estructura:
//     { id: number; amount: number; type: string; }

// Escribe una función en JavaScript que tome este array de transacciones como entrada y devuelva la suma de los montos de todas las transacciones de tipo 'income'.

// // Función que suma los montos de todas las transacciones de tipo 'income'
// function sumIncomeTransactions(transactions) {

// }

// // Ejemplo de uso
// const transactions = [
//   { id: 1, amount: 100, type: 'income' },
//   { id: 2, amount: 50, type: 'expense' },
//   { id: 3, amount: 200, type: 'income' },
//   { id: 4, amount: 75, type: 'expense' },
//   // Más objetos aquí...
// ];

// console.log(sumIncomeTransactions(transactions)); // Output: 300 (100 + 200)

function sumIncomeTransactions(transactions) {
  if (!Array.isArray(transactions)) {
    // Validamos que sea un array
    throw new Error("La entrada no es un array de transacciones.");
  }

  if (transactions.length === 0) {
    // Validamos que haya transacciones
    console.warn("El array de transacciones está vacío.");
    return 0;
  }

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  ); // Filtramos solo las transacciones que sean de tipo income

  if (incomeTransactions.length === 0) {
    // Validamos que hayan transacciones de tipo income
    console.warn("No hay transacciones de tipo 'income'.");
    return 0;
  }

  const sum = incomeTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  ); // Sumamos todos los amount solo de las transacciones de tipo income

  return sum;
}

const transactions = [
  { id: 1, amount: 100, type: "income" },
  { id: 2, amount: 50, type: "expense" },
  { id: 3, amount: 200, type: "income" },
  { id: 4, amount: 75, type: "expense" },
];

console.log(sumIncomeTransactions(transactions));
