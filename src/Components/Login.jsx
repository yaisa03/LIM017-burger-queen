
import React, { useRef } from 'react';
import BurgerLogo from '../Images/BurgerLogo.jpg'

export default function LogIn() {
    const userInputRef = useRef();
    const passwordInputRef = useRef();
  
    const getInputValue = () => {
      const inputUserValue = userInputRef.current.value;
      const inputPasswordValue = passwordInputRef.current.value;
      console.log(inputUserValue);
      console.log(inputPasswordValue);
    }
  
    return (
      <div className="App">
          <img src={BurgerLogo} className="App-logo" alt="logo" />
          <p>Iniciar Sesion:</p>
          <input ref={userInputRef} type="text" id="user" className="loginInputs" placeholder="Usuario"/>
          <input  ref={passwordInputRef} type="password" id="password" className="loginInputs" placeholder="Contraseña"/>
          <button id="loginButton" onClick={getInputValue}>Ingresar</button> 
      </div>
    );
  }
  