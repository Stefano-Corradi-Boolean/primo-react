import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import List from './components/List'
import CardList from './components/CardList'
import Counter from './components/Counter'
import CounterPro from './components/CounterPro'
import CounterProPro from './components/CounterProPro'
import AccordionBase from './components/AccordionBase/Accordion'
import AccordionPro from './components/AccordionPro/Accordion'
import FormBase from './components/FormBase'
import FormPro from './components/FormPro'
import TodoListVBase from './components/TodoListVBase'
import TodoListPro from './components/TodoListPro'
import Clock from './components/Clock'
import MouseTriler from './components/MouseTriler'

const testoLorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur enim ullam in ab, quidem saepe dolores ut atque vero excepturi non eligendi consequuntur, accusantium est beatae quo nihil sunt iste!"

import { useState } from 'react'

const showComponents = [
  { id: 1, show: 'header', description: 'Componente Header' },
  { id: 2, show: 'main', description: 'Componente Main con props titolo e testo' },
  { id: 3, show: 'footer', description: 'Componente Footer' },
  { id: 4, show: 'list', description: 'Componente List' },
  { id: 5, show: 'cardlist', description: 'Componente CardList' },
  { id: 6, show: 'counter', description: 'Componente Counter' },
  { id: 7, show: 'counterpro', description: 'Componente avanzato CounterPro' },
  { id: 8, show: 'counterpropro', description: 'Componente ancora più avanzato CounterProPro' },
  { id: 9, show: 'accordionbase', description: 'Componente AccordionBase' },
  { id: 10, show: 'accordionpro', description: 'Componente AccordionPro' },
  { id: 11, show: 'todobase', description: 'Componente base TodoListVBase' },
  { id: 12, show: 'todopro', description: 'Componente avanzato TodoListPro' },
  { id: 13, show: 'formbase', description: 'Componente base FormBase' },
  { id: 14, show: 'formpro', description: 'Componente avanzato FormPro' },
  { id: 15, show: 'clock', description: 'Componente Clock' },
  { id: 16, show: 'mousetrailer', description: 'Cooridnate Mouse' },
];

const App = () => {

  const [show, setShow] = useState('todopro')

  return (
    <>

      <div className="container my-5">
        <select
          className="form-select"
          onChange={(e) => setShow(e.target.value)} defaultValue={show}
        >
          {showComponents.map(item => (
            <option
              key={item.id}
              value={item.show}
            >
              {item.description}
            </option>

          ))}
        </select>
      </div>

      {show == 'header' && <Header />}
      {show == 'main' && <Main titolo="Questo titolo è una props" testo={testoLorem} />}
      {show == 'footer' && <Footer />}
      {show == 'list' && <List />}
      {show == 'cardlist' && <CardList />}
      {show == 'counter' && <Counter />}
      {show == 'counterpro' && <CounterPro />}
      {show == 'counterpropro' && <CounterProPro />}
      {show == 'accordionbase' && <AccordionBase />}
      {show == 'accordionpro' && <AccordionPro />}
      {show == 'todobase' && <TodoListVBase />}
      {show == 'todopro' && <TodoListPro />}
      {show == 'formbase' && <FormBase />}
      {show == 'formpro' && <FormPro />}
      {show == 'clock' && <Clock />}
      {show == 'mousetrailer' && <MouseTriler />}

    </>
  )
}

export default App;