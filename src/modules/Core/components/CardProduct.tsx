import { useNavigate } from "react-router-dom";
import Button from "../design-system/Button";
import Card from "../design-system/Card"
import useBikeStore from "../../../stores/useBikeStore";

interface Props {
  image: string;
  bike: Bike;
}

function CardProduct({image, bike}: Props) {
  const bikes = useBikeStore(state => state.bikes)
  const updateBikes = useBikeStore(state => state.updateBikes)
  const navigate = useNavigate();

  return (
    <Card isBike={true} urlImage={image}>
      <h3>{bike.nombre}</h3>
      <Button handleClick={() => {
        navigate(`/bikes/${bike.nombre}`)
      }}>Información</Button>
      <Button handleClick={() => {
        updateBikes([...bikes, bike])
      }}>Agregar al carrito</Button>
    </Card>
  )
}

export default CardProduct