
const NavItem = (props) => {

  const { url, text, isActive } = props;
  console.log(isActive, typeof isActive);
  return (
    <li>
      <a href={url} className={`bold ${isActive ? 'active' : ''}`}>{text}</a>
    </li>
  )

}

export default NavItem
