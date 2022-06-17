import React, { useState, useEffect } from 'react';
import Header from "./Header";
import './Orders.css';
import OrdersList from "./OrdersList";
import { getFirestore, query, orderBy, onSnapshot, collection/* , setDoc, doc  */} from "firebase/firestore";
import { app } from '../Firebase/FirebaseInit';
export const db = getFirestore(app);

export default function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ordersCollection = collection(db, "orders");
        const q = query(ordersCollection, orderBy("date", "desc"));
        const getOrders = onSnapshot(q, (snapshot) =>
            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        return getOrders;
    }, []);

    /* const [status, setState] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        setDoc(doc(db, "orders", id), { state: status }, { merge: true });
    }, [id, status]) */

    return (
        <>
            <Header />
            <section className="ordersContainer">
                <div className="ordersPending">
                    <p>Pendientes</p>
                    <OrdersList orders={orders} status="Pendiente" /* setState={setState} setId={setId} *//>
                </div>
                <div className="ordersDoing">
                    <p>En Proceso</p>
                    <OrdersList orders={orders} status="Haciendo"/* setState={setState} setId={setId} *//>
                </div>
                <div className="ordersDone">
                    <p>Listas</p>
                    <OrdersList orders={orders} status="Listo" /* setState={setState} setId={setId} *//>
                </div>
            </section>
        </>
    );
}