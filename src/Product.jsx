import React from "react";

function Product({item, updateQuantity}){
    return(
        <>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, 1)}>Increase</button>
            <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 0}>Decrease</button>
            {item.quantity === 0 && <p>Out of Stock</p>}
        </>
    )
}

export default Product