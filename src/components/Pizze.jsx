import PizzaCard from './PizzaCard'
import axios from 'axios'
import { useEffect, useState } from 'react';

const Pizze = () => {

  const initialFormData = {
    name: '',
    image: '',
    ingredients: ''
  }
  // leggo il dato da .env
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const fetchPizzas = () => {
    axios.get(`${baseApiUrl}/pizzas`)
      .then(res => {
        console.log(res.data);
        setPizzas(res.data)
      })
      .catch(error => {
        console.error('Errore durante il caricamento delle pizze:', error)
      })
  }

  const handleDeletePizza = (id) => {
    console.log(id);
    axios.delete(`${baseApiUrl}/pizzas/${id}`)
      .then(res => {
        // elimino la pizza dall'array locale
        //setPizzas((prevPizzas) => prevPizzas.filter(pizza => pizza.id !== id))

        // effettuo una nuova chiamata all'API per essere allineato col server
        fetchPizzas()
      })
      .catch(error => {
        console.error("Errore ", error)
      })
  }

  const handleAddPizza = (e) => {
    e.preventDefault();
    // trasformo la stringa degli ingredienti in array col trim() degli elementi
    const ingredientsArray = formData.ingredients
      .split(',')
      .map(item => item.trim());

    // imposto l'oggetto da inviare all'API
    const newPizza = { ...formData, ingredients: ingredientsArray }

    // chiamata in POST all'API inviando il nuovo elemento
    axios.post(`${baseApiUrl}/pizzas`, newPizza)
      .then(res => {
        // aggiorno lo stato in base alla response del server
        setPizzas(res.data)
        // resetto il form
        setFormData(initialFormData)
      })
  }

  useEffect(() => {
    fetchPizzas()
  }, [])

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">
          Gestione Pizze
        </h1>
        <div className="row">
          {pizzas.map(pizza => (

            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onDelete={() => handleDeletePizza(pizza.id)}
            />

          ))}

        </div>
      </div>

      {/* form di creazione nuova pizza  */}
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h2>Aggungi una nuova pizza</h2>
            </div>
            <form action="">
              <div className="mb-3">
                <label htmlFor="name">Nome pizza</label>
                <input
                  id='name'
                  type="text"
                  name='name'
                  className='form-control'
                  placeholder='Nome pizza'
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image">URL immagine</label>
                <input
                  id='image'
                  type="text"
                  name='image'
                  className='form-control'
                  placeholder='URL immagine'
                  value={formData.image}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ingredients">Ingredienti (separati da virgola)</label>
                <input
                  id='ingredients'
                  type="text"
                  name='ingredients'
                  className='form-control'
                  placeholder='Es. pomodoro, mozzarella'
                  value={formData.ingredients}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary"
                  type='submit'
                  onClick={handleAddPizza}
                >
                  Aggiungi pizza
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pizze
