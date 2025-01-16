import { useState } from "react";

const CounterProPro = () => {

  const [count, setCount] = useState(0);


  const handleClick = (isIncrement) => {
    const newValue = isIncrement ? count + 1 : count - 1;
    setCount(newValue < 0 ? 0 : newValue)
  }


  return (
    <div className="text-center my-5">
      <h1>{count}</h1>
      <div>
        <div onClick={() => handleClick(true)} className="btn btn-success me-2">+</div>
        <div onClick={() => handleClick(false)} className="btn btn-danger">-</div>
      </div>
    </div>
  )
}

export default CounterProPro
