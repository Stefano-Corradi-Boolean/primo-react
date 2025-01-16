
const AccordionItem = (props) => {

  const { title, description } = props.data;
  const isOpen = props.isOpen
  const onToggle = props.onToggle

  return (
    <div className="accordion">
      <div className="accordion__title">
        <h3>{title}</h3>
        <button className="accordion__btn" onClick={onToggle}  >
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