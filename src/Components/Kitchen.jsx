import React, { useContext } from 'react';
import Header from "./Header";
import './Orders.css';
import OrdersList from "./OrdersList";
import { AuthContext } from '../Firebase/context';

export default function Kitchen() {

    const contextValue = useContext(AuthContext);

    return (
        <>
            <Header />
            <section className="ordersContainer" id="ordersContainerKitchen">
                <div className="ordersPending">
                    <p>Pendientes</p>
                    <OrdersList orders={contextValue.orders} status="Pendiente" />
                </div>
                <div className="ordersDoing">
                    <p>En Proceso</p>
                    <OrdersList orders={contextValue.orders} status="Haciendo"/>
                </div>
                <div className="ordersDone">
                    <p>Listas</p>
                    <OrdersList orders={contextValue.orders} status="Listo" />
                </div>
            </section>
        </>
    );
}