import { useState, useEffect } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }


  // metto in ascolto ad ogni cambiamento delle state count
  useEffect(() => {
    console.log('count è cambiato');

  }, [count])


  return (
    <div className="text-center my-5">
      <h1>{count}</h1>
      <div>
        <div onClick={handleIncrement} className="btn btn-success me-2">+</div>
        <div onClick={() => setCount(count - 1)} className="btn btn-danger">-</div>
      </div>
    </div>
  )
}

export default Counter
