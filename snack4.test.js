// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug sostituisce gli spazi con -."

// 📌 Esempi:

// createSlug("Questo è un test") → "questo-e-un-test"

function createSlug(testo) {
  return testo.replace(/ /g, '-');
}

test('La funzione createSlug sostituisce gli spazi con i trattini -', () => {
  expect(createSlug('Ciao come state')).toBe('Ciao-come-state');
});
