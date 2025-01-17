import { useState } from "react"

const FormPro = () => {

  const defaultFormData = {
    firstname: '',
    lastname: '',
    authorize: false
  }

  const [formData, setFormData] = useState(defaultFormData);

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

  }

  const handlerChange = (e) => {
    console.log(e.target);

    let { name, value, type, checked } = e.target;
    value = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

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
