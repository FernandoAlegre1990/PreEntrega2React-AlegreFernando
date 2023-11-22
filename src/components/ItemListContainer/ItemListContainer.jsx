import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../data/api';
import { Link } from 'react-router-dom';
import './Home.css'; 
function ItemListContainer({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        
      }
    }

    fetchProductData();
  }, []);

  return (
    <div>
     
      <h3>Featured Products</h3>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p className="price">${product.price}</p>
            </Link>
            <button onClick={() => addToCart({ ...product, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      
      </div>
      <Link to="/cart" className="cart-link">
        View Cart
      </Link>
         
    </div>
  );
}

export default ItemListContainer;

