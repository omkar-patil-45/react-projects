import React from 'react';
import Card from './Card';
import './Navbar.css';

const CardList = ({ filters, searchText, onAddToCart }) => {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(err => console.error('Error fetching cards:', err));
  }, []);

  const filteredCards = cards.filter(card => {
    const matchesSearch = searchText
      ? card.name.toLowerCase().includes(searchText.toLowerCase()) ||
        card.color.toLowerCase().includes(searchText.toLowerCase()) ||
        card.type.toLowerCase().includes(searchText.toLowerCase())
      : true;

    const matchesFilters =
      (!filters.color.length || filters.color.includes(card.color)) &&
      (!filters.gender.length || filters.gender.includes(card.gender)) &&
      (!filters.price.length ||
        filters.price.some(priceRange => {
          const [min, max] = priceRange.split('-').map(Number);
          return card.price >= min && card.price <= max;
        })) &&
      (!filters.type.length || filters.type.includes(card.type));

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="card-container">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <Card
            key={card.id}
            title={card.name}
            image={card.imageURL}
            description={`Price: $${card.price} ${card.currency} | Color: ${card.color} | Gender: ${card.gender}`}
            inStock={card.quantity > 0}   
            stock={card.quantity}          
            onAddToCart={() => onAddToCart(card)}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default CardList;
