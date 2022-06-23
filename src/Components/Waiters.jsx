import Header from "./Header";
import WaitersButtons from "./WaitersButtons";
import React, { useEffect, useRef, useState } from 'react';
import MenuList from "./MenuList";
import menu from '../Menu.json';
import Cart from "./Cart";
/* import {
  useNavigate,
  useLocation,
} from "react-router-dom"; */
import { uploadOrder } from '../Firebase/Firebase.js'

// Funcion que crea la vista waiters para tomar pedidos
export default function Waiters() {
  const [data, setData] = useState(menu.breakfast);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const clientInputRef = useRef();
  const clientTableRef = useRef();
  /* let navigate = useNavigate();
  let location = useLocation();
  const takeOrder = () => {
      navigate("/waiters" + location.search);
  }
  const orderStatus = () => {
      navigate("/orders" + location.search);
  }  */
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
    if (inputClientValue) {
      let clientOrder = {
        order: order,
        client: inputClientValue,
        total: total,
        state: "Pendiente",
        table: clientTableRef.current.value,
        date: new Date()
      }
      uploadOrder(clientOrder);
      alert('pedido enviado')
      clientInputRef.current.value = null;
      setOrder([]);
    } else {
      alert('ingresa nombre del cliente')
    }
  }

  useEffect(() => {
    const totalOrder = order.reduce((total, price) => total + price.price, 0);
    setTotal(totalOrder);
  }, [order]);

  return (
    <div id="waiterViewContainer">
      <Header />
      <WaitersButtons />
      <div id="waiterMenuOptions">
        <button onClick={showItemsBreakfast} className="buttonWaiterMenu"> Desayuno </button>
        <button onClick={showItemsDishes} className="buttonWaiterMenu"> Platos </button>
        <button onClick={showItemsDrinks} className="buttonWaiterMenu"> Bebidas </button>
      </div>
      <div id="elementsWaiterView">
        <MenuList data={data} setOrder={setOrder} order={order} addItemQty={addItemQty} />
        <div className="orderContainer">
          <section className="menuItems" id="orderItems">
            <div className="clientNameInput">
              <label>
              Nombre del cliente:
              <input ref={clientInputRef} type="text" className="inputClient" placeholder="Cliente"></input>
              </label>
              <label>Mesa:
              <input type="number" className="inputTable" ref={clientTableRef} placeholder='#'></input>
              </label>
            </div>
            <Cart order={order} addItemQty={addItemQty} subsItemQty={subsItemQty} deleteItem={deleteItem} />
            <p id="orderTotal">Total = ${total}</p>
          </section>
          <button onClick={sendOrder}>Enviar</button>
          <div />
        </div>
      </div>
    </div>
  );
}