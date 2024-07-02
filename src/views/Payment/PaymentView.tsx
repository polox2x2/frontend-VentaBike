import Bikes from "../../modules/Bikes/components/Bikes"
import Button from "../../modules/Core/design-system/Button"
import Header from "../../modules/Header/components/Header"
import PrintVoucher from "../../modules/Voucher/PrintVoucher"
import useBikeStore from "../../stores/useBikeStore"
import useUserStore from "../../stores/useUserStore"
import "./PaymentView.css"

function PaymentView() {
  const updateUser = useUserStore(state => state.updateUser)
  const bikes = useBikeStore(state => state.bikes)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const newUser: User = {
      nombres: data["nombres"].toString(),
      apellidos: data["apellidos"].toString(),
      correo: data["correo"].toString(),
      tarjeta: data["tarjeta"].toString(),
      cvc: data["cvc"].toString(),
      vencimiento: data["vencimiento"].toString(),
      fecha: new Date(),
    }
    updateUser(newUser);
    PrintVoucher({
      bikes: bikes,
      user: newUser,
    })
  }

  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment__cart">
          <h2 className="payment__title">Carrito de Compras</h2>
          <ul>
            {bikes.map((elem, index) => {
              return <Bikes key={index} bike={elem} />
            })}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="user-payment">
          <h2 className="user-payment__title">Datos Personales</h2>
          <div className="user-payment__input">
            <label>Nombres:</label>
            <input type="text" name="nombres" placeholder="Rellena con tus nombres"/>
          </div>
          <div className="user-payment__input">
            <label>Apellidos:</label>
            <input type="text" name="apellidos" placeholder="Rellena con tus apellidos"/>
          </div>
          <div className="user-payment__input">
            <label>Correo Electronico:</label>
            <input type="text" name="correo" placeholder="Rellena con tus nombres"/>
          </div>
          <div className="user-payment__input">
            <label>Tarjeta de Debito o Credito:</label>
            <input type="text" name="tarjeta" placeholder="Rellena con tus nombres"/>
          </div>
          <div className="user-payment__input">
            <label>CVC:</label>
            <input type="text" name="cvc" placeholder="Rellena con tus nombres"/>
          </div>
          <div className="user-payment__input">
            <label>Vencimiento:</label>
            <input type="text" name="vencimiento" placeholder="Rellena con tus nombres"/>
          </div>
          <div className="user-payment__button">
            <Button handleClick={() => {}}>Imprimir Voucher</Button>
          </div>
      </form>
      </div>
      
    </>
  )
}

export default PaymentView