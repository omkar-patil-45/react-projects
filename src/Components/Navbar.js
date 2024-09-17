import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ cartItemCount }) => {
  return (
    <div className='nav'>
      <h3>TeeRex Store</h3>
      <ul>
        <li><Link to="/">Products</Link></li>
        <li>
          <Link to="/cart">
            <div className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
