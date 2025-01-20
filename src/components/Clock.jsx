import { useState, useEffect } from "react"



const Clock = () => {

  const [time, setTime] = useState(new Date())


  // al caricamento della pagina imposto una timing functionc che mi aggiorna l'orologio
  useEffect(() => {

    const clockInterval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    console.log('OROLOGIO montato');

    // quando smonto il componente interrompo il setInterval
    return () => {
      console.log('OROLOGIO SMONTANTO');
      clearInterval(clockInterval);
    } // cleanup

  }, [])

  const fomatTime = (data) => {
    return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
  }

  return (
    <div className="container my-5">
      <div className="card text-center shadow">
        <div className="card-body">
          <div className="card-title">Orologio digitale</div>
          <div className="card-text text-danger">
            <h2>{fomatTime(time)}</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Clock
