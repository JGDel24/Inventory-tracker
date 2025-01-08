import React from "react";

import Product from "./product";

function InventoryList({item, updateQuantity}) {
    return (
        <>
            {inventory.map((item) =>
                <Product key={item} item={item} updateQuantity={updateQuantity}/>
            )}
        </>
    )
}

export default InventoryList