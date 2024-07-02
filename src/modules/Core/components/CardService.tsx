import Card from "../design-system/Card"

interface Props {
  header: string;
  content: string;
  image: string;
}

function CardService({header, content, image}: Props) {
  return (
    <Card isBike={false} urlImage={image}>
      <h3 className="card__header card__header--service">{header}</h3>
      <p className="card__content card__content--service">{content}</p>
    </Card>
  )
}

export default CardService