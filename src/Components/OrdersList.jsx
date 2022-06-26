import OrdersItem from "./OrdersItem.jsx";
import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/context';

//Componente que devuelve la lista de ordenes segun sus estados
export default function OrderList({ orders, status }) {
    
    // Declaracion de variables
    const contextValue = useContext(AuthContext);

    //Filtramos el array de ordenes segun su estado
    const ordersByStatus = orders.filter((order) => order.state === status);

    // Variable que contiene el texto del boton que se mostrara segun el estado de la orden
    let btnText = '';
    switch (status) {
        case 'Pendiente':
            btnText = 'Haciendo';
            break;
        case 'Haciendo':
            btnText = 'Listo';
            break;
        case 'Listo':
            btnText = 'Entregado';
            break;
        default:
            break;
    }

    // Funcion que actualiza el estado de la orden al presionar el boton
    function setState(id, newState) {
        contextValue.updateState(id, newState);
    }
    
    return (
        <section className="orderStatusList">
            { ordersByStatus.map(order => {
                return (<OrdersItem  key={order.id} order={order} btnText={btnText} setState={setState}/>)
            })}
        </section>
    )
}