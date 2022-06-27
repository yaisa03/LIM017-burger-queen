import LogIn from '../Components/Login';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';

test('Clicking the Login button', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(
      <BrowserRouter>
      <LogIn />
      </BrowserRouter>);
    
    //const handleClick = jest.fn();
  
    const Button = screen.getByText('Ingresar');
    expect(Button).not.toBeDisabled();
    //expect(handleClick).toHaveBeenCalledTimes(1)
  });
  
