// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
  expect(getInitials('Claudia', 'Destris')).toBe('C', 'D');
  expect(getInitials('Francesco', 'Crisco')).toBe('F', 'C');
});
