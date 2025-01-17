import React from "react";

function Product({item, updateQuantity}) {

    const handleDecrease = () => {
        if (item.quantity === 1) {
            sendEmail(item.name)
        }
        updateQuantity(item.id, -1)
    };

    const sendEmail = (productName) => {
        console.log(`${productName} is out of stock.`)
        alert(`${productName} is out of stock.`)
    }

    return (
        <>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, 1)}>Increase</button>
            <button onClick={handleDecrease} disabled={item.quantity <= 0}>Decrease</button>
            {item.quantity === 0 && <p>Out of Stock</p>}
        </>
    )
}

export default Product