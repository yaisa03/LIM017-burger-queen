import Header from "./Header";
import WaitersButtons from "./WaitersButtons";
import React, { useEffect, useRef, useState, useContext } from 'react';
import MenuList from "./MenuList";
import menu from '../Menu.json';
import Cart from "./Cart";
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/context';

// Funcion que crea la vista waiters para tomar pedidos
export default function Waiters() {
  
  // Declaracion de variables
  const contextValue = useContext(AuthContext);
  const [data, setData] = useState(menu.breakfast);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const clientInputRef = useRef();
  const clientTableRef = useRef();

  //Damos funcionalidad al boton Desayuno para que muestre las opciones de desayuno desde el menu json
  const showItemsBreakfast = () => {
    return setData(menu.breakfast);
  }

  //Damos funcionalidad al boton Platos para que muestre las opciones de platos desde el menu json
  const showItemsDishes = () => {
    return setData(menu.dishes);
  }

  //Damos funcionalidad al boton Bebidas para que muestre las opciones de bebidas desde el menu json
  const showItemsDrinks = () => {
    return setData(menu.drinks);
  }

  //Funcionalidad para aumentar en cantidad el item si se presiona nuevamente la opcion
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

  //Funcionalidad para disminuir en cantidad el item
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

  //Funcionalidad para eliminar un item de la orden del cliente
  const deleteItem = (id, order) => {
    const editedArray = order.filter((item) => item.id !== id);
    setOrder(editedArray);
  }

  //Funcionalidad para subir una orden a la colecciond e Firebase
  const sendOrder = () => {
    const inputClientValue = clientInputRef.current.value;
    const inputTableValue = clientTableRef.current.value;
    let [message, icon, title] = ['','',''];
    if (inputClientValue && inputTableValue && inputTableValue>0) {
      let clientOrder = {
        order: order,
        client: inputClientValue,
        total: total,
        state: "Pendiente",
        table: inputTableValue,
        date: new Date()
      }
      contextValue.uploadOrder(clientOrder);
      message= 'Pedido enviado';
      icon = 'success';
      title = 'EXITO';
      clientInputRef.current.value = null;
      clientTableRef.current.value = null;
      setOrder([]);
    } else if (!inputClientValue)  {
      message = 'Ingresa nombre del cliente';
      icon = 'error';
      title = 'ERROR';
    } else if(inputTableValue<1) {
      message = 'Ingresa un numero de mesa valido';
      icon = 'error';
      title = 'ERROR';
    }else {
      message = 'Ingresa el numero de mesa';
      icon = 'error';
      title = 'ERROR';
    }
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
    })
  }

  // Funcionalidad para actualizar el total de la orden segun se vayan escogiendo items 
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