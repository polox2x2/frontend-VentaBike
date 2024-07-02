import { Link } from "react-router-dom"
import Menu from "../../Icons/components/Menu"
import Cart from "../../Cart/components/Cart"
import "../styles/Header.css"
import useAnchorStore from "../../../stores/useAnchorStore"
import useMenuStore from "../../../stores/useMenuStore"

const NAVBAR_LINK = {
  enable: "navbar__link",
  disable: "navbar__link navbar__link--disable"
}

const NAVBAR_STATE = {
  close: "navbar",
  open: "navbar navbar--open"
}

function Header() {
  const menuState = useMenuStore((state) => state.menu)
  const isShop = useAnchorStore((state) => state.isShop);
  const updateIsShop = useAnchorStore((state) => state.updateIsShop)

  return (
  <header>
    <div className="logotipo">
      <Link to="/" className="logotipo__text">STORE BIKES TRAIL</Link>
    </div>
    <Menu />
    <nav className={menuState ? NAVBAR_STATE.open : NAVBAR_STATE.close}>
      <li><Link to="/" className={NAVBAR_LINK.enable} onClick={() => {updateIsShop(false)}}>Inicio</Link></li>
      <li><a href="/#services" className={isShop ? NAVBAR_LINK.disable : NAVBAR_LINK.enable}>Servicios</a></li>
      <li><a href="/#adviser" className={isShop ? NAVBAR_LINK.disable : NAVBAR_LINK.enable}>Asesores</a></li>
      <li><Link to="/bikes" className="navbar__link" onClick={() => {updateIsShop(true)}}>Productos</Link></li>
      <li><Cart /></li>
    </nav>
  </header>
  )
}

export default Header