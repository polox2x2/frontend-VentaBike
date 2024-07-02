import Header from "../../modules/Header/components/Header"
import Motos from "../../Imagenes/Motos"
import "./ShopView.css"
import CardProduct from "../../modules/Core/components/CardProduct"
import FetchImage from "../../modules/Core/utils/FetchImage"
import ReplaceSpaces from "../../modules/Core/utils/ReplaceSpaces"

function ShopView() {
  return (
    <>
      <Header />
      <div className="products">
        <div className="products__header">
          <div className="products__header__decoration">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2 className="products__header__title">Nuestros Productos</h2>
        </div>
        <div className="products__grid">
        {Motos.map((elem) => 
          <CardProduct key={elem.id} bike={elem} image={FetchImage(ReplaceSpaces(elem.nombre), "jpg")}/>
        )}
        </div>
      </div>
      
    </>
  )
}

export default ShopView