// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

function isPalindroma(stringa) {
  const formattedString = stringa.toLowerCase();

  const reversed = formattedString.split('').reverse().join('');

  return formattedString === reversed;
}

test('La funzione verifica se una stringa è palindromo', () => {
  expect(isPalindroma('anna')).toBe(true);
});
