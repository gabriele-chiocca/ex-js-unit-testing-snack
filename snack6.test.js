// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

function createSlug(title) {
  if (title === '' || title.length <= 5) {
    throw Error('Titolo non valido');
  }
}

test('La funzione verifica se il titolo è valido', () => {
  expect(() => createSlug('')).toThrow('Titolo non valido');
});
