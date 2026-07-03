const somma = require('./somma.js');

test('La funzione `somma` restituisce la somma di due numeri', () => {
  expect(somma(1, 1)).toBe(2);
  expect(somma(2, 3)).toBe(5);
});
