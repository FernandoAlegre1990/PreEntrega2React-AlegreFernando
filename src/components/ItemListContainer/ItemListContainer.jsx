import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; // Ajusta la ruta según la ubicación de tu contexto
import { fetchProducts } from '../../data/api';
import './Home.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { categoryId } = useParams();

  useEffect(() => {
    async function fetchProductData() {
      try {
        const productsData = await fetchProducts(categoryId);
        setProducts(productsData);
      } catch (error) {
      
      }
    }

    fetchProductData();
  }, [categoryId]);

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


