import Header from "./Header";
import React, { useRef, useState } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import MenuList from "./MenuList";
import menu from '../Menu.json';
import Cart from "./Cart";
import { uploadOrder } from '../Firebase/Firebase.js'


export default function Waiters() {
  const [data, setData] = useState(menu.breakfast);
  const [order, setOrder] = useState([]);
  const clientInputRef = useRef();
  let navigate = useNavigate();
  let location = useLocation();

  const takeOrder = () => {
    // const inputClientValue = clientInputRef.current.value;
    navigate("/waiters" + location.search);
    // console.log(inputClientValue);
  }
  const orderStatus = () => {
    // const inputClientValue = clientInputRef.current.value;
    navigate("/orders" + location.search);
    // console.log(inputClientValue);
  }
  /* const getInputClientValue = () => {
      const inputClientValue = clientInputRef.current.value;
      console.log(inputClientValue);
  } */
  const showItemsBreakfast = () => {
    return setData(menu.breakfast);
  }
  const showItemsDishes = () => {
    return setData(menu.dishes);
  }
  const showItemsDrinks = () => {
    return setData(menu.drinks);
  }
  const addItemQty = (id, option) => {
    if (order.some((item) => item.id === id)) {
      const idproduct = order.map((item) =>
        item.id === id ? { ...item, price: (item.price / item.count) * (item.count + 1), count: item.count + 1 } : item
      );
      setOrder(idproduct);
    } else {
      setOrder([
        ...order,
        { id: id, item: option.item, price: option.price, count: 1 },
      ]);
    }
  };

  const subsItemQty = (id, order) => {
    const rest = order.map((item) => {
      if (item.count > 1) {
        return item.id === id ? { ...item, price: (item.price / item.count) * (item.count - 1), count: item.count - 1 } : item;
      } else {
        return item.id === id ? { ...item, count: 1 } : item;
      }
    });
    setOrder(rest);
  };

  const deleteItem = (id, order) => {
    const editedArray = order.filter((item) => item.id !== id);
    setOrder(editedArray);
  }

  const sendOrder = () => {
    const inputClientValue = clientInputRef.current.value;
    if(inputClientValue) {
      let clientOrder = {
        order: order,
        client: inputClientValue
      }
      uploadOrder(clientOrder);
      alert('pedido enviado')
      clientInputRef.current.value = null;
      setOrder([]);
    } else {
      alert('ingresa nombre del cliente')
    }
  }

  return (
    <div id="waiterViewContainer">
      <Header />
      <div>
        <button onClick={takeOrder} className="buttonWaiterOptions"> Tomar orden </button>
        <button onClick={orderStatus} className="buttonWaiterOptions"> Estado orden </button>
      </div>
      <div id="waiterMenuOptions">
        <button onClick={showItemsBreakfast} className="buttonWaiterMenu"> Desayuno </button>
        <button onClick={showItemsDishes} className="buttonWaiterMenu"> Platos </button>
        <button onClick={showItemsDrinks} className="buttonWaiterMenu"> Bebidas </button>
      </div>
      <div id="elementsWaiterView">
        <MenuList data={data} setOrder={setOrder} order={order} addItemQty={addItemQty} />
        <div className="orderContainer">
          <section className="menuItems" id="orderItems">
            <h4>Nombre del cliente:</h4>
            <input ref={clientInputRef} type="text" className="inputClient" placeholder="Cliente"></input>
            <Cart order={order} addItemQty={addItemQty} subsItemQty={subsItemQty} deleteItem={deleteItem} />
          </section>
          <button onClick={sendOrder}>Enviar</button>
          <div />
        </div>
      </div>
      </div>
      );
}