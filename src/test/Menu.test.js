import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import MenuItem from '../Components/MenuItem';
import MenuList from '../Components/MenuList';
import Cart from '../Components/Cart';
import WaitersButtons from '../Components/WaitersButtons';
import OrderList from '../Components/OrdersList';
import OrdersItems from '../Components/OrdersItem';

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
const data = [
    {
        state: 'Haciendo',
        order: [
            {
            id: 1,
            item: 'Hamburgesa',
            price: 10, 
            count: 1
            },
            {
            id: 2,
            item: 'Sandwich',
            price: 8,
            count: 1
            }
        ],
        table: 1,
        client: 'Maria'

    },
    {
        state: 'Pendiente',
        order: [
            {
            id: 1,
            item: 'Hamburgesa',
            price: 10,
            count: 1
            },
            {
            id: 2,
            item: 'Sandwich',
            price: 8,
            count: 1
            }
        ],
        table: 2,
        client: 'Rosy'

    },
    {
        state: 'Listo',
        order: [
            {
            id: 1,
            item: 'Hamburgesa',
            price: 10,
            count: 1
            },
            {
            id: 2,
            item: 'Sandwich',
            price: 8,
            count: 1
            }
        ],
        table: 3,
        client: 'Nadia'

    }
]
test('renders OrderList', () => {    
    render(<OrderList orders={data} status = 'Haciendo' />)
    screen.getByText('Listo');
    render(<OrderList orders={data} status = 'Pendiente' />)
    screen.getByText('Haciendo');
    render(<OrderList orders={data} status = 'Listo' />)
    screen.getByText('Entregado');
});
test('renders OrdersItems', () => {    
    const setState = jest.fn();
    render(<OrdersItems order={data[0]} btnText='Haciendo' setState={setState}  />)
    const Button = screen.getByText('Haciendo');
    fireEvent.click(Button);
    expect(setState).toHaveBeenCalledTimes(1);
    
});
test('button Waiters', () => {
    render(
        <BrowserRouter>
          <WaitersButtons/>
        </BrowserRouter>);
    const Button1 = screen.getByText('Tomar orden');
    expect(Button1).not.toBeDisabled();
    const Button2 = screen.getByText('Estado orden');
    expect(Button2).not.toBeDisabled();
}); 
