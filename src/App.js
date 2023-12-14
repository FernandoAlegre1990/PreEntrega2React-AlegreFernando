import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './context/CartContext'; // Importa el CartProvider desde su ubicación

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con CartProvider */}
      <Router>
        <div>
          <NavBarComponent />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
