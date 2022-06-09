
export default function MenuItem({option}) {
    const {id, item, price} = option;
    return (
        <button className="menuItem">{item} ${price}</button>
    )
}