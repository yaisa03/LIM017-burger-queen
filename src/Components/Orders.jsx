import Header from "./Header";
import './Orders.css';
export default function Orders() {
    return (
        <>
        <Header />
        <section className="ordersContainer">
            <div>
                <p>Pendientes</p>
            </div>
            <div>
                <p>En Proceso</p>
            </div>
            <div>
                <p>Listas</p>
            </div>
        </section>
        </>
    );
}