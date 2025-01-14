import NavItem from './NavItem'


const Navbar = () => {
  return (
    <nav className="sc-nav">
      <ul>
        <NavItem url="home" text="home" />
        <NavItem url="about" text="chi siamo" isActive={true} />
        <NavItem url="contacts" text="contatti" />
      </ul>
    </nav>
  )
}

export default Navbar
