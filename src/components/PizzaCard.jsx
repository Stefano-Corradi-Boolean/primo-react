
const PizzaCard = (props) => {
  const { image, ingredients, name } = props.pizza;
  const onDelete = props.onDelete;
  return (

    <div className="col-12 col-md-4 mb-3">

      <div className="card">
        <img src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            Ingredienti: <strong>{ingredients.join(', ')}</strong>
          </p>
          <div className="btn btn-danger" onClick={onDelete}>
            <i className="fa-solid fa-trash-can"></i> Elimina
          </div>
        </div>
      </div>

    </div>
  )
}

export default PizzaCard
