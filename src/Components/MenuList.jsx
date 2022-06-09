/* import menu from '../Menu.json'; */
import MenuItem from './MenuItem.jsx';
export default function MenuList({data}) {
    /* const data = menu.breakfast; */
    console.log(data);
    return (
        <section className="menuList" id="menuList"> 
        {data.map(option => {
            return <MenuItem key={option.id} option={option} /> 
        })}
    </section>  
    )
}