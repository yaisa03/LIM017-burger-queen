import MenuItem from './MenuItem.jsx';
export default function MenuList({data, setOrder, order, addItemQty}) {
    return (
        <section className="menuList" id="menuList"> 
        {data.map(option => {
            return <MenuItem key={option.id} option={option} setOrder={setOrder}  order={order} addItemQty={addItemQty}/> 
        })}
    </section>  
    )
}