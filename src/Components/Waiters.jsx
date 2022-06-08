import Header from "./Header";
import React, { useRef } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function Waiters () {
    const clientInputRef = useRef();
    let navigate = useNavigate();
    let location = useLocation();

    const takeOrder = () => {
        // const inputClientValue = clientInputRef.current.value;
        navigate("/waiters" + location.search);
        // console.log(inputClientValue);
    }
    const orderStatus = () => {
        // const inputClientValue = clientInputRef.current.value;
        navigate("/orders" + location.search);
        // console.log(inputClientValue);
    }
    const getInputClientValue = () => {
        const inputClientValue = clientInputRef.current.value;
        console.log(inputClientValue);
    }

    return (
    <div id="waiterViewContainer">
        <Header/>
        <div>
            <button onClick= {takeOrder} className= "buttonWaiterOptions"> Tomar orden </button>
            <button onClick= {orderStatus} className= "buttonWaiterOptions"> Estado orden </button>
        </div>
        <div id="waiterMenuOptions">
            <button onClick= {getInputClientValue} className= "buttonWaiterMenu"> Desayuno </button>
            <button className= "buttonWaiterMenu"> Almuerzo y Cena </button>
        </div>
        <div id="elementsWaiterView">
            <section className="menuItems" id="menuItems">
            <button className= "breakfast"> Cafe Americano </button>
            <button className= "breakfast"> Cafe con leche </button>
            <button className= "breakfast"> Sandwich de jamon y queso </button>
            <button className= "breakfast"> Jugo Natural </button>
            </section>
            <section className="menuItems" id="orderItems">
            <h4>Nombre del cliente:</h4>
            <input ref={clientInputRef}type= "text" className="inputClient"placeholder= "Cliente"></input>
            </section>
        </div>
    </div>
    );
}