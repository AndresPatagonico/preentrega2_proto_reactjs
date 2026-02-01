import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="EmptyCart">
                <h2>No hay items en el carrito 🛒</h2>
                <Link to='/' className="ButtonBack">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="CartContainer">
            <h1 className="CartTitle">Tu Carrito</h1>
            
            <div className="CartList">
                {cart.map(p => (
                    <div key={p.id} className="CartItem">
                        <div className="CartItemLeft">
                            <img src={p.img} alt={p.name} className="CartItemImg"/>
                            <div className="CartItemInfo">
                                <h3>{p.name}</h3>
                                <p>Cant: {p.quantity}</p>
                                <p>Precio u.: ${p.price}</p>
                            </div>
                        </div>
                        
                        <div className="CartItemRight">
                            <p className="Subtotal">Subtotal: ${p.price * p.quantity}</p>
                            <button onClick={() => removeItem(p.id)} className="ButtonRemove">
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="CartFooter">
                <h2 className="Total">Total: ${total}</h2>
                <div className="CartActions">
                    <button onClick={() => clearCart()} className="ButtonClear">
                        Vaciar Carrito
                    </button>
                    <Link to='/checkout' className="ButtonCheckout">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;