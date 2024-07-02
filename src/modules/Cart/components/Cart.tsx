import { useNavigate } from "react-router-dom"
import ShoppingCart from "../../Icons/components/ShoppingCart"

function Cart() {
  const navigate = useNavigate() 
  return <a onClick={() => {navigate("/payment")}}>
    <ShoppingCart />
  </a>
}

export default Cart