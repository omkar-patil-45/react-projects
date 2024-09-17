import React from 'react';
import './Navbar.css';

const Card = ({ image, title, description, inStock, stock, onAddToCart }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <p className="card-stock">
          {inStock ? `${stock} items in stock` : 'Out of stock'}
        </p>
        <button 
          className="card-btn" 
          onClick={onAddToCart} 
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default Card;
