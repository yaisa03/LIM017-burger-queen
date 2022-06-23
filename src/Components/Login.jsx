import React, { useRef, useContext } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import BurgerLogo from '../Images/BurgerLogo.png';
import { AuthContext } from '../Firebase/context';
import Swal from 'sweetalert2';

export default function LogIn() {
  const userInputRef = useRef();
  const passwordInputRef = useRef();
  const workerSelectRef = useRef();

  let navigate = useNavigate();
  let location = useLocation();

  const contextValue = useContext(AuthContext);

  const getInputValue = () => {
    const inputUserValue = userInputRef.current.value;
    const inputPasswordValue = passwordInputRef.current.value;
    const workerSelectRefValue = workerSelectRef.current.value;
   
    contextValue.logIn(inputUserValue, inputPasswordValue).then((user) => {      
      if(typeof user === 'string'){
        let message = '';
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
