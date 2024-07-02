import useBikeStore from "../../../stores/useBikeStore";
import Button from "../../Core/design-system/Button";
import FetchImage from "../../Core/utils/FetchImage";
import ReplaceSpaces from "../../Core/utils/ReplaceSpaces";
import "../styles/Bikes.css";

interface Props {
  bike: Bike;
}

function Bikes({bike}: Props) {
  const bikes = useBikeStore(state => state.bikes)
  const updateBikes = useBikeStore(state => state.updateBikes)

  return (
    <li className="item-bike">
      <div className="item-bike__block">
        <img className="item-bike__block__image" src={FetchImage(ReplaceSpaces(bike.nombre), "jpg")} alt="Imagen de la moto" />
        <h4>{bike.nombre}</h4>
        <span>{bike.precio}</span>
        <Button handleClick={() => {
          updateBikes(bikes.filter(elem => elem != bike))
        }}>Eliminar</Button>
      </div>
    </li>
  )
}
export default Bikes;