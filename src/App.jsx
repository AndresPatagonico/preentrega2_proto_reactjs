import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a Todo por $2'} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos de'} />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;