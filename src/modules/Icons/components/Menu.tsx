import useMenuStore from "../../../stores/useMenuStore"
import "../styles/Menu.css"

function Menu() {
  const menuState = useMenuStore((state) => state.menu)
  const updateMenu = useMenuStore((state) => state.updateMenu)

  return (
    <div className="Menu" onClick={() => {updateMenu(!menuState)}}>
      <div className="Menu__line"></div>
      <div className="Menu__line"></div>
    </div>
  )
}

export default Menu