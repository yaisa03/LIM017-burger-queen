import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

// Funcion que retorna los elementos del componente cart (items elegidos por el cliente para ordenar)
export default function CartList({ order, addItemQty, subsItemQty, deleteItem }) {

    return (
        <section className="cartList" id="cartList">
            {order.map(option => {

                // Damos funcionalidad al icono + (aumentar la cantidad de productos del mismo item)
                const addItemToOrder = () => {
                    addItemQty(option.id, option);
                }

                // Damos funcionalidad al icono - (disminuir la cantidad de productos del mismo item)
                const subsItemFromOrder = () => {
                    subsItemQty(option.id, order);
                }

                // Damos funcionalidad al icono para eliminar un item de la orden del cliente
                const deleteItemFromOrder = () => {
                    deleteItem(option.id, order);
                }
                
                return <section key={option.id} className="cartList-item">
                    <p>{option.item}</p>
                    <div className="itemQuantity">
                        <FaPlus className="fa fa-plus" onClick={addItemToOrder} data-testid="addBtn"/>
                        <p>{option.count}</p>
                        <FaMinus className="fa fa-minus" onClick={subsItemFromOrder} data-testid="minusBtn"/>
                    </div>
                    <p> ${option.price}</p>
                    <FaTrashAlt className="fa fa-trash" onClick={deleteItemFromOrder} data-testid="deleteBtn"/>
                </section>
            })}
        </section>
    )
}