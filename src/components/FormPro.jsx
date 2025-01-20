import { useState, useEffect } from "react"

const FormPro = () => {

  const defaultFormData = {
    firstname: '',
    lastname: '',
    age: 18,
    authorize: false
  }

  const [formData, setFormData] = useState(defaultFormData);

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // logica di invio del forms....
    //....

    // resetto il form
    setFormData(defaultFormData);
  }

  const handlerChange = (e) => {

    let { name, value, type, checked } = e.target;
    value = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    if (formData.age < 18) {
      alert('Devi essere naggiorenne!')
    }
  }, [formData.age])

  // eseguito al montaggio del componente
  useEffect(() => {
    console.log('il ciclo di vita è stato montato');

  }, [])

  return (
    <div className="container my-5">

      <div className="row">
        <div className="col-6">

          <form action="#" onSubmit={handlerSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Nome"
              name="firstname"
              value={formData.firstname}
              onChange={handlerChange}
              type="text"
            />
            <input
              className="form-control mb-3"
              placeholder="Cognome"
              name="lastname"
              value={formData.lastname}
              onChange={handlerChange}
              type="text"
            />
            <input
              className="form-control mb-3"
              placeholder="Età"
              name="age"
              value={formData.age}
              onChange={handlerChange}
              type="number"
            />

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handlerChange}
                name="authorize"
                checked={formData.authorize}
              />
              <label className="form-check-label">
                Autorizza
              </label>
            </div>

            <button
              className="btn btn-success"
              type="sumbmit"
            >Invia</button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default FormPro
