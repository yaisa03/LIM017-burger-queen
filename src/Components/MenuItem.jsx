
export default function MenuItem({option, setOrder, order}) {
    const {id, item, price} = option;
    const addItemToOrder = () => {
        setOrder((prevItem)=>{
          return [...prevItem, {id: id, item: item, price: price}]
        });
        return console.log(order);
    } 
    return (
        <button onClick={addItemToOrder} className="menuItem">{item} ${price}</button>
    )
}