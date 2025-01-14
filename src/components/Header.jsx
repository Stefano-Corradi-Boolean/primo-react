import Navbar from './Navbar'
const titolo = "Sono il titolo";


const Header = () => {
  return (
    <header>
      <h2 className="main-title text-center">
        {titolo}
      </h2>

      <Navbar />

    </header>
  )
}

export default Header;