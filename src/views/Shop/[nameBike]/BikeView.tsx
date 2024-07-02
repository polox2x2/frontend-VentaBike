import { useParams } from "react-router-dom"
import Header from "../../../modules/Header/components/Header";
import Motos from "../../../Imagenes/Motos";
import FetchImage from "../../../modules/Core/utils/FetchImage";
import ReplaceSpaces from "../../../modules/Core/utils/ReplaceSpaces";
import Button from "../../../modules/Core/design-system/Button";
import useBikeStore from "../../../stores/useBikeStore";
import "./BikeView.css"

function BikeView() {
  const bikes = useBikeStore(state => state.bikes)
  const updateBikes = useBikeStore(state => state.updateBikes)
  const {nameBike} = useParams();

  const currentBike = (function() {
    let value: Bike = Motos[0];
    for (let i = 0; i < Motos.length; i++) {
      if(Motos[i].nombre == nameBike) {
        value = Motos[i];
      }
    }
    return value
  })();

  return (
    <>
      <Header />
      <div className="bike">
        <h1 className="bike__header">{currentBike.nombre}</h1>
        <div className="bike__information">
          <img className="bike__information__image" src={FetchImage(ReplaceSpaces(currentBike.nombre), "jpg")} alt={currentBike.description} />
          <div className="bike__information__description">
            <span className="descripcion">{currentBike.description}</span><br />
            <span className="estado">Estado: <span className={currentBike.estado ? "bike-activo": "bike-inactivo"}>{currentBike.estado ? "Activo": "Inactivo"}</span></span><br />
            <span className="cilindrada">Cilindrada: {currentBike.cilindrada}</span><br />
            <span className="precio">precio: {currentBike.precio}$</span><br />
            <Button handleClick={() => {updateBikes([...bikes, currentBike])}}>Agregar al carrito</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BikeView