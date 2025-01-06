import React, {useState} from 'react';

import './App.css'
import InventoryList from './InventoryList';


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



}

  


export default App


