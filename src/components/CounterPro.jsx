import { useState } from "react";

const CounterPro = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handledecrement = () => {

    let newValue = count < 1 ? 0 : count - 1;
    setCount(newValue)

  }


  return (
    <div className="text-center my-5">
      <h1>{count}</h1>
      <div>
        <div onClick={handleIncrement} className="btn btn-success me-2">+</div>
        <div onClick={handledecrement} className="btn btn-danger">-</div>
      </div>
    </div>
  )
}

export default CounterPro
