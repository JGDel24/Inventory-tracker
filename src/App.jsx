import React, {useState} from 'react';
import InventoryList from './InventoryList';
import './App.css'

function App() {

  const [inventory, setInventory] = useState([]);

  const addProduct = (product) => {
    setInventory(...inventory, product)
  }

  const updateQuantity = (id, amount) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? {...item, Quantity: item.quantity + amount} : id
      )
    )
  }

  return (
    <>
    <h1>Inventory Tracker</h1>
    <InventoryList/>
    
    </>
  )



}

  


export default App


