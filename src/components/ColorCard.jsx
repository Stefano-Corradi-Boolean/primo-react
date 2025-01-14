

const ColorCard = (props) => {

  const { colore, descrizione } = props;

  return (
    <div className="sc-card">
      <h4>{colore}</h4>
      <p>{descrizione}</p>
    </div>
  )
}

export default ColorCard
