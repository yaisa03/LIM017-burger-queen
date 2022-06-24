import OrdersItem from "./OrdersItem.jsx";
import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/context';

export default function OrderList({ orders, status }) {

    const contextValue = useContext(AuthContext);

    const ordersByStatus = orders.filter((order) => order.state === status);

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