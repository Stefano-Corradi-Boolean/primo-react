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

const testoLorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur enim ullam in ab, quidem saepe dolores ut atque vero excepturi non eligendi consequuntur, accusantium est beatae quo nihil sunt iste!"


const App = () => {

  const show = 'formpro';

  return (
    <>

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
      {show == 'todobase' && <FormBase />}
      {show == 'formpro' && <FormPro />}

    </>
  )
}

export default App;