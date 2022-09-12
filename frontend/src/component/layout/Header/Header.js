import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { FiMenu } from 'react-icons/all'
import { useSelector } from 'react-redux';
import UserOptions from './UserOptions';

const Header = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <>
      <header id="navbar">
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            {/* <FiMenu /> */}
          </label>
          <label className="logo">EcomWeb</label>

          <ul>
            <li>
              <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                  type="text"
                  placeholder="Search Product Here..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="Search" />
              </form>
            </li>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            {!isAuthenticated &&
              <li><Link to="/login">Login</Link></li>
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
