import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../data/api';
import { Link } from 'react-router-dom';
import './Home.css'; 
function ItemListContainer({ addToCart }) {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()

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

