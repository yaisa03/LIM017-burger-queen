import Header from "./Header";
import './Orders.css';
import OrdersList from "./OrdersList";

export default function Orders() {
    const data = [
        {
            "status": "pending",
            "name": "Stefanie",
            "table": "10"
        },
        {
            "status": "doing",
            "name": "Yaisa",
            "table": "2"
        },
        {
            "status": "pending",
            "name": "Stefanie",
            "table": "9"
        },
        {
            "status": "doing",
            "name": "Yaisa",
            "table": "8"
        },
        {
            "status": "done",
            "name": "Gina",
            "table": "5"
        },
        {
            "status": "pending",
            "name": "Michelle",
            "table": "7"
        },
        {
            "status": "pending",
            "name": "Ana",
            "table": "5"
        }
    ]
    return (
        <>
            <Header />
            <section className="ordersContainer">
                <div className="ordersPending">
                    <p>Pendientes</p>
                    <OrdersList data={data} />
                </div>
                <div className="ordersDoing">
                    <p>En Proceso</p>
                    <OrdersList data={data} />
                </div>
                <div className="ordersDone">
                    <p>Listas</p>
                    <OrdersList data={data} />
                </div>
            </section>
        </>
    );
}