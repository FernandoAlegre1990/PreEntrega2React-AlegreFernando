
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import './index.css';


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = itemToAdd => {
    console.log('Adding to cart:', itemToAdd);
    const existingItemIndex = cartItems.findIndex(item => item.id === itemToAdd.id);

    if (existingItemIndex !== -1) {
      console.log('Item already exists. Updating quantity.');
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += itemToAdd.quantity;
      setCartItems(updatedCartItems);
      console.log('Updated Cart Items:', updatedCartItems);
    } else {
      console.log('Item is new. Adding to cart.');
      setCartItems(prevItems => [...prevItems, itemToAdd]);
    }
  };    

  return (
    <Router>
      <div>
        <NavBarComponent/>
        <Routes>
          <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          
          <Route path="/category/:categoryId" element={<ItemListContainer addToCart={addToCart} />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
