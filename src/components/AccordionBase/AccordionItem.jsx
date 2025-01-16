import { useState } from "react";

const AccordionItem = (props) => {

  const { title, description } = props.data;

  const [isOpen, setIsOpen] = useState(false)

  const handlerClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="accordion">
      <div className="accordion__title">
        <h3>{title}</h3>
        <button className="accordion__btn" onClick={handlerClick} >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <div>
        {description}
      </div>}
    </div>
  )
}

export default AccordionItem