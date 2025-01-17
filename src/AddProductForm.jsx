import React, {useState} from "react";

function AddProductForm({addProduct}) {
    const [name, setName] = useState('');
    const [quantity, setQuantity]= useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {id: Date.now(), name, quantity}
        addProduct(product)
        setName('')
        setQuantity(0)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add Product"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input 
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </>
    )
}

export default AddProductForm