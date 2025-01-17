import React from "react";
import Product from "./product";

function InventoryList({inventory, updateQuantity}) {
    return (
        <>
            {inventory.map((item) =>
                <Product key={item.id} item={item} updateQuantity={updateQuantity} />
            )}
        </>
    )
}

export default InventoryList