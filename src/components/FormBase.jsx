import { useState } from "react"

const FormBase = () => {

  const [firstName, setFirstName] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(firstName);
    if (firstName.length < 3) {
      console.log('Nome troppo corto');
    } else {
      console.log('Invio il form.....');
    }
  }

  return (
    <div className="container my-5">
      <h3>Nome inserito: {firstName}</h3>
      <div className="row">
        <div className="col-6">

          <form action="#" onSubmit={handlerSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
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

export default FormBase
