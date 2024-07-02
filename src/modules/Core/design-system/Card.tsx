import "../styles/Card.css"

interface Props {
  urlImage: string;
  isBike: boolean;
  children: JSX.Element[] | JSX.Element;
}

const CLASS_CARD = {
  Service: "card card--service",
  Bike: "card card--bike"
}

const CLASS_IMAGE = {
  Service: "card__image card__image--service",
  Bike: "card__image card__image--bike"
}

const ALT_IMAGE = {
  Service: "Es una imagen referencial del servicio.",
  Bike: "Es una imagen de la motocicleta a la venta."
}

const Card = ({urlImage, isBike, children}: Props) => {
  return (
    <div className={isBike ? CLASS_CARD.Bike : CLASS_CARD.Service}>
      <img src={urlImage} alt={isBike ? ALT_IMAGE.Bike : ALT_IMAGE.Service} className={isBike ? CLASS_IMAGE.Bike : CLASS_IMAGE.Service} />
      {children}
    </div>
  )
}

export default Card