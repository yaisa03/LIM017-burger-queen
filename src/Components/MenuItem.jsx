
export default function MenuItem({option, setOrder, order, addItemQty}) {
    const {id, item, price} = option;
    
    /* const addItemQty = (id) => {
        if (order.some((item) => item.id === id)) {
          const idproduct = order.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          );
          setOrder(idproduct);
        } else {
            console.log(order);
          setOrder([
            ...order,
            { id: id, item: item, price: price, count: 1 },
          ]);
        }
      }; */

    const addItemToOrder = () => {
          addItemQty(id, option);
    }
    
    return (
        <button onClick={addItemToOrder} className="menuItem">{item} ${price}</button>
    )
}