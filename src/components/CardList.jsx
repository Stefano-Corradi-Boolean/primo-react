import ColorCard from "./ColorCard"
import ColorCardChildren from "./ColorCardChildren"

const colors = [
  { id: 1, color: 'rosso', description: 'Il color del fuoco' },
  { id: 2, color: 'verde', description: 'Il color della natura' },
  { id: 3, color: 'blu', description: 'Il color del cielo' },
  { id: 4, color: 'giallo', description: 'Il color del sole' },
  { id: 5, color: 'arancione', description: 'Il color degli agrumi' }
];

const CardList = () => {
  return (
    <>

      <div className="d-flex flex-wrap">
        {colors.map(item => (
          <div className="sc-card" key={`card1-${item.id}`}>
            <h4>{item.color}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>


      <div className="d-flex flex-wrap">
        {colors.map(item => (
          <ColorCard
            key={`card-${item.id}`}
            colore={item.color}
            descrizione={item.description}
          />
        ))}
      </div>

      <div className="d-flex flex-wrap">
        {colors.map(item => (
          <ColorCardChildren key={`cardc-${item.id}`}>
            <h4>{item.id} - {item.color}</h4>
            <p>{item.description}</p>
          </ColorCardChildren>
        ))}
      </div>
    </>
  )
}

export default CardList
