// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

function average(array) {
  let sum = 0;
  array.forEach((single) => {
    sum += single;
  });

  return sum / array.length;
}

test('La funzione average deve calcolare la media aritmetica di un array di numeri', () => {
  expect(average([1, 1, 4, 5, 6, 7])).toBe(4);
});
