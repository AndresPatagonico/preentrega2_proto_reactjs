import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../ProductosxAPI'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId]);

    if(loading) {
        return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Cargando detalle...</h2>
        return <Loader /> 
    }

    if(!product) {
        return <h2 style={{textAlign: 'center'}}>El producto no existe</h2>
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;