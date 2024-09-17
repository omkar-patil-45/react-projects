import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import './Navbar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.searchInput.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchInput"
          placeholder="Search products..."
        />
        <button type="submit" className="search-button-container">
          <FontAwesomeIcon icon={faSearch} /> 
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
