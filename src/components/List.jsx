const colori = ['rosso', 'verde', 'blu', 'giallo', 'arancione'];

const coloriObjs = [
  { id: 1, colore: 'rosso', description: 'Il colore del fuoco' },
  { id: 2, colore: 'verde', description: 'Il colore della natura' },
  { id: 3, colore: 'blu', description: 'Il colore del cielo' },
  { id: 4, colore: 'giallo', description: 'Il colore del sole' },
  { id: 5, colore: 'arancione', description: 'Il colore degli agrumi' }
];

const List = () => {
  return (
    <>
      <ul>
        {colori.map((colore, index) => (
          <li key={index}>{colore}</li>
        ))}
      </ul>

      <ul>
        {coloriObjs.map(item => (
          <li key={item.id}>{item.colore}</li>
        ))}
      </ul>
    </>
  )
}

export default List
