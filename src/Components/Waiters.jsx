import Header from "./Header";
import React, { useRef } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import MenuList from "./MenuList";
import menu from '../Menu.json';


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
    /* const getInputClientValue = () => {
        const inputClientValue = clientInputRef.current.value;
        console.log(inputClientValue);
    } */
    let data = menu.breakfast;
    const showItemsBreakfast = () => {
        return data = menu.breakfast;
    } 
    const showItemsLunch = () => {
        return data = menu.lunch;
    } 

    return (
    <div id="waiterViewContainer">
        <Header/>
        <div>
            <button onClick= {takeOrder} className= "buttonWaiterOptions"> Tomar orden </button>
            <button onClick= {orderStatus} className= "buttonWaiterOptions"> Estado orden </button>
        </div>
        <div id="waiterMenuOptions">
            <button onClick= {showItemsBreakfast} className= "buttonWaiterMenu"> Desayuno </button>
            <button onClick= {showItemsLunch} className= "buttonWaiterMenu"> Almuerzo y Cena </button>
        </div>
        <div id="elementsWaiterView">
            <MenuList data={data}/>
            <section className="menuItems" id="orderItems">
            <h4>Nombre del cliente:</h4>
            <input ref={clientInputRef}type= "text" className="inputClient"placeholder= "Cliente"></input>
            </section>
        </div>
    </div>
    );
}