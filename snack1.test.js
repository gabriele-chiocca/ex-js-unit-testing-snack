// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(nome, cognome) {
  return nome.charAt(0) + cognome.charAt(0);
}

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
  expect(getInitials('Claudia', 'Destris')).toBe('CD');
  expect(getInitials('Francesco', 'Crisco')).toBe('FC');
});
