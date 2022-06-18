import { setDoc, doc } from "firebase/firestore";
import { db } from "./Orders.jsx"

export default function OrderList({ orders, status/* , setState, setId */}) {

    const ordersByStatus = orders.filter((order) => order.state === status)

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

    function changeState(id) {
        setDoc(doc(db, "orders", id), { state: btnText }, { merge: true });
    }

    return (
        <section className="orderStatusList">
            {ordersByStatus.map(order => {
                return (<div className="orderStatusItem" key={order.id}>
                    <p>Cliente: {order.client}</p>
                    <p>Mesa: {order.table}</p>
                    <p>Estado: {order.state}</p>
                    <details>
                        <summary>Detalles de la orden</summary>
                        {order.order.map((e) => {
                            return <p>{e.item}  {e.count}</p>
                        })}
                    </details>
                    <button onClick={changeState(order.id)}>{btnText}</button>
                </div>)
            })}
        </section>
    )
}