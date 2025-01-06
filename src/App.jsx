import React, {useState} from 'react';

import './App.css'



function App() {

  const [inventory, setInventory] = useState([]);

  const addProduct = (product) => {
    setInventory([...inventory, product])
  }

  const updateQuantity = (id, amaount) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? {...item, Quantity: item.quantity + amaount} : id
      )
    )
  }



}

  


export default App


