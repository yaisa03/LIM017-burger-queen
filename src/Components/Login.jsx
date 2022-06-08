
import React, { useRef } from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import { signIn } from '../Firebase/Firebase.js'

import BurgerLogo from '../Images/BurgerLogo.jpg'

export default function LogIn() {
  const userInputRef = useRef();
  const passwordInputRef = useRef();

  let navigate = useNavigate();
  let location = useLocation();

  const getInputValue = () => {
    const inputUserValue = userInputRef.current.value;
    const inputPasswordValue = passwordInputRef.current.value;
    signIn(inputUserValue, inputPasswordValue).then((user) => {      
      if(typeof user === 'string'){
        console.log(user);
      }else{
        navigate("/waiters" + location.search);
        console.log(user.user);
      }
    })
    /* console.log(inputUserValue);
    console.log(inputPasswordValue); */
  }

  return (
    <div className="App">
      <img src={BurgerLogo} className="App-logo" alt="logo" />
      <p>Iniciar Sesion:</p>
      <input ref={userInputRef} type="text" id="user" className="loginInputs" placeholder="Usuario" />
      <input ref={passwordInputRef} type="password" id="password" className="loginInputs" placeholder="Contraseña" />
      <button id="loginButton" onClick={getInputValue}>Ingresar</button>
    </div>
  );
}
