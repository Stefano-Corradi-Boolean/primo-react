import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import List from './components/List'
import CardList from './components/CardList'

const testoLorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur enim ullam in ab, quidem saepe dolores ut atque vero excepturi non eligendi consequuntur, accusantium est beatae quo nihil sunt iste!"


const App = () => {
  return (
    <>
      <Header />
      <Main titolo="Questo titolo è una props" testo={testoLorem} />
      <Footer />
      <List />
      <CardList />
    </>
  )
}

export default App;