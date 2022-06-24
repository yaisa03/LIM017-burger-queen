import React, { useContext } from 'react';
import Header from "./Header";
import WaitersButtons from "./WaitersButtons";
import './Orders.css';
import OrdersList from "./OrdersList";
import { AuthContext } from '../Firebase/context';

export default function Orders() {

    const contextValue = useContext(AuthContext);

    return (
        <>
            <Header />
            <WaitersButtons />
            <section className="ordersContainer">
                <div className="ordersDone" id="ordersDoneWaiter">
                    <p>Ordenes Listas</p>
                    <OrdersList orders={contextValue.orders} status="Listo" />
                </div>
            </section>
        </>
    );
}