import Header from "../../modules/Header/components/Header"
import Button from "../../modules/Core/design-system/Button"
import FetchImage from "../../modules/Core/utils/FetchImage"
import { useNavigate } from "react-router-dom"
import "./HomeView.css"
import CardService from "../../modules/Core/components/CardService"
import useAnchorStore from "../../stores/useAnchorStore"

function HomeView() {
  const navigate = useNavigate()
  const updateIsShop = useAnchorStore((state) => state.updateIsShop)

  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__content">
          <h2>COMPRA TU MOTO
          A TU GUSTO AQUI</h2>
          <p>Esta es una tienda donde se venden motos de alta gama de distintas cilindraras del modelo "trail" el cual se caracteriza tener una gran desempeso tanto como en off-road como para viajes en carretera, estas motos son de lo mejor hasta is gustas las puedes usar para enduro con un mantenimiendo menos costoso, solo dependera del piloto asi es que ven y pon a prueba tus habilidades con una maquina de estas!!!</p>
          <Button handleClick={() => {
            navigate("/bikes");
            updateIsShop(true);
          }}>Mira nuestros productos</Button>
        </div>
        <div className="hero__image">
          <img src={FetchImage("Home_Image", "jpg")} alt="Imagen de una moto referencial del negocio." />
        </div>
      </section>
      <br id="services"/>
      <section className="services">
        <div className="services__header">
          <div className="services__header__decoration">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2 className="service__header__title">Nuestros Servicios</h2>
        </div>
        <div className="service__grid">
          <CardService header="Mantenimiento" content="Incluyen todos los mantenimientos gratis." image={FetchImage("Icon_Herramientas", "png")}/>
          <CardService header="Credito" content="Nuestra empresa te ofrece diversos metodos de pagos, los cuales son muy accesibles." image={FetchImage("Icon_Credito", "png")}/>
          <CardService header="Garantia" content="Con nuestra empresa te daremos una garantia hasta los 30 000 km o los 3 primeros años de uso lo que llegue primeros de uso donde." image={FetchImage("Icon_Garantia", "png")}/>
        </div>
      </section>
      <br id="adviser"/>
      <section className="adviser">
        <div className="adviser__header">
          <div className="adviser__header__decoration">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2 className="adviser__header__title">Nuestros Asesores</h2>
        </div>
        <div className="adviser__grid">
          <CardService header="Luis" content="Hola, soy Luis, su asesor de ventas de motos. Estoy aquí para ayudarles a encontrar la moto perfecta para su aventura." image={FetchImage("Luis_Image", "jpg")}/>
          <CardService header="Humberto" content="Hola, soy Humberto, su asesor de ventas de motos. ¿Listos para comenzar la aventura?" image={FetchImage("Humberto_Image", "jpeg")}/>
        </div>
      </section>
      <footer className="home-footer">
        <span className="home-footer__message">&copy; Store Bikes Trail</span>
      </footer>
    </>
  )
}

export default HomeView