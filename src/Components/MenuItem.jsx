
// Componente (boton) que representa cada item del menu ofrecido por el restaurant
export default function MenuItem({option, addItemQty }) {
    
    // Declaracion de variables
    const {id, item, price} = option;

    // Damos funcionalidad a boton para que se adhiera a la orden del cliente
    const addItemToOrder = () => {
        addItemQty(id, option);
    }
        
    return (
        <button onClick={addItemToOrder} className="menuItem">{item} ${price}</button>
    )
}