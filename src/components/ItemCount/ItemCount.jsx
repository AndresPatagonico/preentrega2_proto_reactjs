import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const increment = () => quantity < stock && setQuantity(quantity + 1);
    const decrement = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div className="CounterContainer">
            <div className="Controls">
                <button className="ControlBtn" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="ControlBtn" onClick={increment}>+</button>
            </div>
            
            <button className="AddButton" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al Carrito
            </button>
        </div>
    )
}
export default ItemCount;