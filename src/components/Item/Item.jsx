import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2>{name}</h2>
            </header>
            
            <img src={img} alt={name} className="CardImg"/>
            
            <section className="InfoSection">
                <p className="InfoPrice">${price}</p>
                <p style={{color: '#666'}}>Stock: {stock}</p>
            </section>
            
            <footer className="CardFooter">
                <Link to={`/item/${id}`} className='DetailButton'>
                    Ver detalle
                </Link>
            </footer>
        </article>
    )
}

export default Item;