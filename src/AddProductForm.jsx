import React, {useState} from "react";

function AddProductForm({addProdcut}) {
    const [name, setName] = ('')
    const [quantity, setQuantity] = ([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {id: Date.now(), name, quantity}
        addProdcut(product)
        name('')
        quantity(0)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    required
                />
                <button type="submit">Add Product</button>

            </form>
        </>
    )
}

export default AddProductForm


