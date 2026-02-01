import { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getCategories } from '../../ProductosxAPI';
import { CartContext } from '../../context/CartContext';
import './NavBar.css';

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const { cart } = useContext(CartContext);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
      getCategories().then(data => {
      setCategories(data); 
    });
  }, []);

  return (
    <nav className="NavbarContainer">
      <Link to="/" className="NavbarLogo"> 
        <h3>Todo por $2</h3>
      </Link>
      
      <div className="NavbarLinks">
        <NavLink to="/" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
        
        <details className="DropdownMenu">
            <summary className="DropdownTitle">Categorías</summary>
            <div className="DropdownContent">
                {categories.map((cat) => (
                    <NavLink 
                        key={cat.slug} 
                        to={`/category/${cat.slug}`}
                        className="DropdownItem"
                        onClick={(e) => e.target.closest('details').removeAttribute('open')}
                    >
                        {cat.name}
                    </NavLink>
                ))}
            </div>
        </details>
      </div>

      <Link to="/cart" style={{ textDecoration: 'none' }}>
          <div className="CartWidget" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '8px 15px', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '20px',
              cursor: 'pointer',
              border: '1px solid #ddd'
          }}>
              <span style={{ fontSize: '1.2rem' }}>🛒</span>
              <span style={{ fontWeight: 'bold', color: '#333' }}>
                {totalQuantity}
              </span>
          </div>
      </Link>
    </nav>
  )
}
export default NavBar;