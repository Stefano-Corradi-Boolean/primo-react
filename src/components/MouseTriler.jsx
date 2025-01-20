import { useState, useEffect } from "react"

const MouseTriler = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const handlerMouseMove = (e) => {
      console.log();

      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handlerMouseMove)

    // quando smonto il componenter rimuovo il listener
    return () => window.removeEventListener('mousemove', handlerMouseMove)

  }, [])

  return (
    <div className="container my-5">
      <div className="card text-center shadow">
        <div className="card-body">
          <div className="card-title">Coordinate Mouse</div>
          <div className="card-text text-danger">
            <h2>x:{position.x} y:{position.y}</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MouseTriler
