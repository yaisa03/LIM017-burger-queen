
export default function MenuItem({option}) {
    const {id, item, price} = option;
    return (
        <button className="breakfast">{item} ${price}</button>
    )
}