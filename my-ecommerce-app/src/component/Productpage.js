// src/components/Productpage.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function Productpage() {
  // Initialize the cart state with an empty array
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  // Save cart items to localStorage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to handle adding items to the cart
  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);

      // If it exists, increase its quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Otherwise, add the new product with a quantity of 1
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (productIdToRemove) => {
    setCartItems((prevItems) => {
      // Filter out the item to remove based on its ID
      const updatedCartItems = prevItems.filter((item) => item.id !== productIdToRemove);
      return updatedCartItems;
    });
  };

  return (
    <div className="product-page">
      <Header />
      <table>
        <tbody>
          <tr>
            <td><ProductList onAddToCart={handleAddToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
