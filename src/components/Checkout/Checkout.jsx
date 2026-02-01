import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const fakeOrderId = `ORDEN-26-${Math.floor(Math.random() * 1000000)}`;
        setOrderId(fakeOrderId);
        clearCart();
    }, []);

    return (
        <div className="CheckoutContainer">
            <h1 className="CheckoutTitle">¡Muchas Gracias!</h1>
            <h2 className="CheckoutSubtitle">Su compra se ha realizado con éxito.</h2>
            
            <p className="OrderIdText">
                Su número de pedido es: 
                <strong>{orderId}</strong>
            </p>
            
            <Link to="/" className="ButtonHome">
                Volver al Inicio
            </Link>
        </div>
    )
}
export default Checkout;