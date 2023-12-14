import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { fetchProducts } from '../../data/api';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const productsData = await fetchProducts();
        const selectedProduct = productsData.find(p => p.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (error) {
        // Manejo de errores
      }
    }

    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const parsedQuantity = parseInt(quantity);
    const itemToAdd = { ...product, quantity: parsedQuantity };
    addToCart(itemToAdd); // Agregar el producto al carrito usando el contexto
    setAddedToCart(true);
  };

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <div className="quantity-control">
          <button onClick={() => setQuantity(Math.max(1, parseInt(quantity) - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(parseInt(quantity) + 1)}>+</button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {addedToCart && <p className="added-to-cart-message">Product added to cart!</p>}
        <div className="button-container">
          <Link to="/cart" className="view-cart-button">
            View Cart
          </Link>
        </div>
        <p className="description">{product.description}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default ProductDetail;