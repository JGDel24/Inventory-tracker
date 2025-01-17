import React, {useState} from 'react';
import AddProductForm from './AddProductForm';
import InventoryList from './InventoryList';
import Weather from './Weather';
import './App.css'


function App() {
    const [inventory, setInventory] = useState([]);

    const addProduct = (product) => {
        setInventory([...inventory, product])
    };

    const updateQuantity = (id, amount) => {
        setInventory(
            inventory.map((item) =>
                item.id === id ? {...item, Quantity: item.quantity + amount} : id
            )
        )
    }

    return (
        <>
            <h1>Inventory Tracking</h1>
            <AddProductForm />
            <InventoryList />
            <Weather />
        </>
    )

}

export default App


