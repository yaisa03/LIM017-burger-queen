import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

export default function CartList({ order, addItemQty, subsItemQty, deleteItem }) {
    return (
        <section className="cartList" id="cartList">
            {order.map(option => {

                const addItemToOrder = () => {
                    addItemQty(option.id, option);
                }

                const subsItemFromOrder = () => {
                    subsItemQty(option.id, order);
                }

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