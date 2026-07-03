// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug restituisce una stringa in lowercase."

const createSlug = require('./createSlug.js');

test('La funzione "createSlug" restituisce una stringa in lowercase', () => {
  expect(createSlug('ROSE')).toBe('rose');
  expect(createSlug('CIAO')).toBe('ciao');
});
