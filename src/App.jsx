import React, {useState} from 'react';
import InventoryList from './InventoryList';
import AddProductForm from './AddProductForm';


import './App.css'

function App() {
  const [inventory, SetInventory] = useState([]);

  const addProduct = (product) => {
    SetInventory([...inventory, product])
  }

  const updateQuantity = (id, amount) => {
    SetInventory(
      inventory.map((item) => 
        item.id=== id ? {...item, Quantity: item.quantity + amount} :id
      )
    )
  }

  return (
    <>
      <h1>Inventory Tracking</h1>
      <AddProductForm />
      <InventoryList />
    </>
  )

}

  


export default App


