import React from "react";
import product from "./product";

function InventoryList({inventory, updateQuantity}) {
    return (
        <>
            {inventory.map((item) =>
                <product key={item} item={item} updateQuantity={updateQuantity}/>
            )}
        </>
    )
}

export default InventoryList
