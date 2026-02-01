import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, name, price, img };
        addItem(item, quantity);
    }

    return (
        <div className="ItemDetailContainer">
            <article className="ItemDetailCard">
                <picture className="ItemDetailImg">
                    <img src={img} alt={name} />
                </picture>

                <section className="ItemDetailInfo">
                    <h2 className="ItemTitle">{name}</h2>
                    <span className="CategoryTag">{category}</span>
                    <p className="Description">{description}</p>
                    <p className="Price">${price}</p>
                    
                    {quantityAdded > 0 ? (
                        <Link to='/cart' className="FinishButton">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )}
                </section>
            </article>
        </div>
    )
}
export default ItemDetail;