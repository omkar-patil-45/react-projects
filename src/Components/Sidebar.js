// Sidebar.js
import React from 'react';
import './Navbar.css';

const Sidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div className="filter-section">
        <h4>Title Color</h4>
        {['Red', 'Blue', 'Green'].map(color => (
          <label key={color}>
            <input
              type="checkbox"
              name="color"
              value={color}
              checked={filters.color.includes(color)}
              onChange={onFilterChange}
            />
            {color}
          </label>
        ))}
      </div>
      <div className="filter-section">
        <h4>Gender</h4>
        {['Men', 'Women'].map(gender => (
          <label key={gender}>
            <input
              type="checkbox"
              name="gender"
              value={gender}
              checked={filters.gender.includes(gender)}
              onChange={onFilterChange}
            />
            {gender}
          </label>
        ))}
      </div>
      <div className="filter-section">
        <h4>Price</h4>
        {['0-250', '251-450', '450-600'].map(price => (
          <label key={price}>
            <input
              type="checkbox"
              name="price"
              value={price}
              checked={filters.price.includes(price)}
              onChange={onFilterChange}
            />
            Rs {price}
          </label>
        ))}
      </div>
      <div className="filter-section">
        <h4>Type</h4>
        {['Polo', 'Hoodie', 'Basic'].map(type => (
          <label key={type}>
            <input
              type="checkbox"
              name="type"
              value={type}
              checked={filters.type.includes(type)}
              onChange={onFilterChange}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
