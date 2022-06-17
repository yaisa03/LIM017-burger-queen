
export default function OrderList({ data }) {
    return (
        <section className="orderStatusList">
            {data.map(order => {
                return <div className="orderStatusItem" key={order.table}>
                    <p>{order.name}</p>
                    <p>{order.table}</p>
                    <p>{order.status}</p>
                    <details>
                        <summary>Detalles de la orden</summary>
                        <p>{order.name}</p>
                        <p>{order.table}</p>
                        <p>{order.status}</p>
                    </details>
                </div>
            })}
        </section>
    )
}