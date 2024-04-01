import React from 'react';

function CartItem({ item, onUpdateCart, onRemoveFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} style={{ maxWidth: '200px', height: 'auto' }} />
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)} x {item.quantity}</p>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
