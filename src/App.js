import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CardList from './Components/CardList';
import CartPage from './Components/CartPage';
import Sidebar from './Components/Sidebar';
import SearchBar from './Components/Searchbar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({
    color: [],
    gender: [],
    price: [],
    type: [],
  });
  const [searchText, setSearchText] = useState('');

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateItemQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[name] = [...updatedFilters[name], value];
      } else {
        updatedFilters[name] = updatedFilters[name].filter((v) => v !== value);
      }
      return updatedFilters;
    });
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} />
      <SearchBar onSearch={handleSearch} />

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="content-wrapper">
                <Sidebar filters={filters} onFilterChange={handleFilterChange} />
                <CardList
                  filters={filters}
                  searchText={searchText}
                  onAddToCart={handleAddToCart}
                />
              </div>

            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                updateItemQuantity={updateItemQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
