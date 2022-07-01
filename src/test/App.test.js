import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from '../App';

test('renders learn react link', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
  
  const inputUser = screen.getByPlaceholderText(/Usuario/i);
  expect(inputUser).toBeInTheDocument();

  const inputPassword = screen.getByPlaceholderText(/Contraseña/i);
  expect(inputPassword).toBeInTheDocument();
});

test('Clicking the Login button', () => {
  render(
    <BrowserRouter>
    <LogIn />
    </BrowserRouter>);

  const Button = screen.getByText('Ingresar');
  expect(Button).not.toBeDisabled();
});
