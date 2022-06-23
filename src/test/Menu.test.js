import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import MenuItem from '../Components/MenuItem';
import MenuList from '../Components/MenuList';
import Cart from '../Components/Cart';
import WaitersButtons from '../Components/WaitersButtons';

test('renders MenuItems', () => {
    const option = {
        id: 1,
        item: 'Hamburgesa',
        price: 10
    }
    render(<MenuItem option={option} />)
    screen.getByText(`${option.item} $${option.price}`);
});

test('Clicking the button MenuItem', () => {
    const option = {
        id: 1,
        item: 'Hamburgesa',
        price: 10
    }
    const addItemQty = jest.fn()

    render(<MenuItem option={option} addItemQty={addItemQty} />);
  
    const Button = screen.getByText(`${option.item} $${option.price}`);
    fireEvent.click(Button);
    expect(addItemQty).toHaveBeenCalledTimes(1);
  }); 

test('renders MenuList', () => {
    const data = [
        {
            id: 1,
            item: 'Hamburgesa',
            price: 10
        },
        {
            id: 2,
            item: 'Sandwich',
            price: 8
        }
    ]
    render(<MenuList data={data} />)
    screen.getByText(`${data[0].item} $${data[0].price}`);
});
const order = [
    {
        id: 1,
        item: 'Hamburgesa',
        price: 10
    },
    {
        id: 2,
        item: 'Sandwich',
        price: 8
    }
]
test('renders Cart', () => {
    render(<Cart  order={order} />)
    screen.getByText(`${order[0].item}`);
});
test('buttonAddItem', () => {
    const addItemQty = jest.fn();
    render(<Cart order={order} addItemQty={addItemQty} />)
    const Button = screen.getAllByTestId('addBtn');
    fireEvent.click(Button[0]);
    expect(addItemQty).toHaveBeenCalledTimes(1);
});
test('buttonMinusItem', () => {
    const subsItemQty = jest.fn();
    render(<Cart order={order} subsItemQty={subsItemQty} />)
    const Button = screen.getAllByTestId('minusBtn');
    fireEvent.click(Button[0]);
    expect(subsItemQty).toHaveBeenCalledTimes(1);
});
test('buttonDeleteItem', () => {
    const deleteItem = jest.fn();
    render(<Cart order={order} deleteItem={deleteItem} />)
    const Button = screen.getAllByTestId('deleteBtn');
    fireEvent.click(Button[0]);
    expect(deleteItem).toHaveBeenCalledTimes(1);
});
test('buttonWaiters', () => {
    render(<WaitersButtons />)
    const Button = screen.getByText('Tomar orden');
    expect(Button).not.toBeDisabled();
});
