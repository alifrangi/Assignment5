// Cart.js
import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, onUpdateCart, onRemoveFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onUpdateCart={onUpdateCart} 
          onRemoveFromCart={() => onRemoveFromCart(item.id)}
        />
      ))}
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
