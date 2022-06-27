import React, { useRef, useContext } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import BurgerLogo from '../Images/BurgerLogo.png';
import { AuthContext } from '../Firebase/context';
import Swal from 'sweetalert2';

// Vista LogIn para iniciar sesion
export default function LogIn() {

  // Declaracion de variables
  const userInputRef = useRef();
  const passwordInputRef = useRef();
  const workerSelectRef = useRef();
  let navigate = useNavigate();
  let location = useLocation();
  const contextValue = useContext(AuthContext);

  // Funcion que permite acceder a informacion ingresada en inputs que contienen datos del usuario
  const getInputValue = () => {

    // Declaracion de variables locales
    const inputUserValue = userInputRef.current.value;
    const inputPasswordValue = passwordInputRef.current.value;
    const workerSelectRefValue = workerSelectRef.current.value;

    // Accedemos a funcion LogIn del componente context
    contextValue.logIn(inputUserValue, inputPasswordValue).then((user) => {      
      if(typeof user === 'string'){
        let message = '';
        
        //Manejamos errores de inicio de sesion
          switch (user) {
            case 'Firebase: Error (auth/internal-error).':
              message ='Ingresar contraseña';
              break;
            case 'Firebase: Error (auth/invalid-email).':
              message ='Email invalido';
              break;
            case 'Firebase: Error (auth/user-not-found).':
              message ='Usuario no encontrado';
              break;
            case 'Firebase: Error (auth/wrong-password).':
              message ='Contraseña incorrecta';
              break;
            case 'Firebase: Error (auth/missing-email).':
              message ='Ingresar email';
              break;
            default:
              break;
          }
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: message,
        })
      }else{
        // Accedemos a la vista correspondiente segun el usuario
        if (workerSelectRefValue === "Mesas") {
          navigate("/waiters" + location.search);
        } else {
          navigate("/kitchen" + location.search);
        }        
      }
    })
  }
  return (
    <div className="App">
      <img src={BurgerLogo} className="App-logo" alt="logo" />
      <section className="LogIn">
        <p>Iniciar Sesion:</p>
        <input ref={userInputRef} type="text" id="user" className="loginInputs" placeholder="Usuario" />
        <input ref={passwordInputRef} type="password" id="password" className="loginInputs" placeholder="Contraseña" />
        <select className="workerType" ref={workerSelectRef}>
          <option value="Mesas">Mesas</option>
          <option value="Cocinas">Cocina</option>
        </select>
        <button id="loginButton" onClick={getInputValue}>Ingresar</button>
      </section>
    </div>
  );
}
