import React from 'react';
import './Navbar.css';

const CartPage = ({ cartItems, updateItemQuantity, removeItem }) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <div className="cart-page-container">
      <h2>Shopping Cart</h2>

      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imageURL} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="cart-item-actions">
                    <h4>Quantity:</h4>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) =>
                        updateItemQuantity(item.id, parseInt(e.target.value))
                      }
                    >
                      {[...Array(6).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="cart-total-container">
        <h4>Total Items: {totalItemCount}</h4><hr></hr>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
