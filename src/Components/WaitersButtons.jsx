import {
    useNavigate,
    useLocation,
  } from "react-router-dom";

// Componente que devuelve los botones con las opciones del mesero Tomar orden o ver estado de ordenes 
export default function WaitersButtons () {
  
   // Declaracion de variables
    let navigate = useNavigate();
    let location = useLocation();

    // Funcionalidad para el boton tomar orden
    const takeOrder = () => {
        navigate("/waiters" + location.search);
    }

    // Funcionalidad para el boton estado de la orden
    const orderStatus = () => {
        navigate("/orders" + location.search);
    }

    return (<div>
        <button onClick={takeOrder} className="buttonWaiterOptions"> Tomar orden </button>
        <button onClick={orderStatus} className="buttonWaiterOptions"> Estado orden </button>
      </div>)
}