// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

// Creare un test che verifichi le seguenti descrizioni:

// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

const posts = [
  { id: 1, title: 'Primo Object', slug: 'primo-object' },
  { id: 2, title: 'Second Object', slug: 'secondo-object' },
  { id: 3, title: 'Terzo Object', slug: 'terzo-object' },
];

function findPostById(array, id) {
  return array.find((post) => {
    return post.id === id;
  });
}

test('La funzione verifica se il post restituito è corretto', () => {
  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: 'Second Object',
    slug: 'secondo-object',
  });

  expect(findPostById(posts, 1)).toEqual({
    id: 1,
    title: 'Primo Object',
    slug: 'primo-object',
  });

  expect(findPostById(posts, 3)).toEqual({
    id: 3,
    title: 'Terzo Object',
    slug: 'terzo-object',
  });
});
