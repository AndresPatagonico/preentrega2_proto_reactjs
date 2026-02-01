import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../ProductosxAPI';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const asyncFunc = categoryId ? getProductsByCategory(categoryId) : getProducts();

        asyncFunc
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error("Error al cargar productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [categoryId]);

    useEffect(() => {
        if (categoryId) {
            document.title = `Todo por $2 - ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`;
        } else {
            document.title = 'Todo por $2 - Inicio';
        }
    }, [categoryId]);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#e67e22', textTransform: 'capitalize' }}>
                {greeting} {categoryId && ` - ${categoryId}`}
            </h1>
            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h2>Cargando productos... ⏳</h2>
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    )
}

export default ItemListContainer;