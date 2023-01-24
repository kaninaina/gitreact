import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
function Header(props) {
    let {cartLength}=props;
  return (
    <header>
        <div className='logo'>
            <h3>Logo</h3>
        </div>
        <nav>
            <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/product">PRODUCT</Link>
                </li>
                <li>
                  <Link to="/cart">CART</Link>
                  <p>{cartLength.length}</p>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header