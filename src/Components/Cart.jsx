import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

export default function CartList({ order, addItemQty }) {
    return (
        <section className="cartList" id="cartList">
            {order.map(option => {

                const addItemToOrder = () => {
                    addItemQty(option.id, option);
                }
                return <section key={option.id} className="cartList-item">
                    <p>{option.item}</p>
                    <div className="itemQuantity">
                        <FaPlus className="fa fa-plus" onClick={addItemToOrder} />
                        <p>{option.count}</p>
                        <FaMinus className="fa fa-minus" />
                    </div>
                    <p> ${option.price}</p>
                    <FaTrashAlt className="fa fa-trash" />
                </section>
            })}
        </section>
    )
}