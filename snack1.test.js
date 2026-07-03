// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

const getInitials = require('./getInitials.js');

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
  expect(getInitials('Claudia', 'Destris')).toBe('CD');
  expect(getInitials('Francesco', 'Crisco')).toBe('FC');
});
