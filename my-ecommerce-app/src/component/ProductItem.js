import React, { useState } from 'react';

function ProductItem({ product, onAddToCart }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px', height: 'auto' }} /> 
      <div onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <h3>{product.name}</h3>
        {showDescription && <p>{product.description}</p>}
      </div>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
