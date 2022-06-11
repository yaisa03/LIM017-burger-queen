export default function CartList({order}) {
    return (
        <section className="cartList" id="cartList"> 
        {order.map(option => {
            return <p key={option.id} >{option.item} ${option.price}</p>
        })}
    </section>  
    )
}