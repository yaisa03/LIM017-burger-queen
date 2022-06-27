// Componente que devuelve cada item de la orden del cliente para la vista del cocinero
export default function OrdersItem({ order, btnText, setState}) {
    
    // Funcion que cambia el estado de una orden en la coleccion de Firebase
    function changeState() {
        setState(order.id, btnText);
    }
    
    return (
        <div className="orderStatusItem">
                    <p>Cliente: {order.client}</p>
                    <p>Mesa: {order.table}</p>
                    <p>Estado: {order.state}</p>
                    <details>
                        <summary>Orden</summary>
                        <table>
                        {order.order.map((e) => {
                            return (
                            <tr>
                                <td>{e.item}</td>
                                <td>{e.count}</td>
                            </tr>)
                        })}
                        </table>
                    </details>
                    <button className="btnState" onClick={changeState}> {btnText} </button>
                </div>
    )
}