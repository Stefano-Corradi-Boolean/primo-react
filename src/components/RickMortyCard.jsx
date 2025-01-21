

const RickMortyCard = ({ name, image, status, species }) => {

  return (
    <div className="character">
      <div className="character-image">
        <img alt={name} src={image} />
      </div>
      <div className="character-info">
        <p className="character-name">{name}</p>
        <p className="character-status-origin">
          <span className="status-icon is-alive" />{status} - {species}
        </p>
      </div>
    </div>
  )
}

export default RickMortyCard
