import React, { useContext } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../../context/CartContext';

const CartWidgetComponent = () => {
  const { cartTotal } = useContext(CartContext);

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>{cartTotal}</span>
    </div>
  );
};

export default CartWidgetComponent;