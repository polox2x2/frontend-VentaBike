import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ErrorView.css"

function ErrorView() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  return (
    <div id="error-page">
      <h1>¡Pagina No Existente!</h1>
      <p>Regresa a la pagina principal lo mas rapido posible para que puedas seguir con el flujo habitual.</p>
      <button onClick={() => {
        navigate("/")
      }}>Volver</button>
    </div>
  );
}

export default ErrorView