import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div>
      <nav className="navbar navbar-dark bg-#1c2a48 mdb-color darken-3 navbar-expand-lg">
        <Link to="/homepage" className="nav-link">
          <img src= {process.env.PUBLIC_URL + "./Images/CarSooqLogo.png"}
            alt = "logo"
            width = "7.5%"
           />
        </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto" >
          <li className="navbar-item" >
          <Link to="/inventory" className="nav-link">Inventory</Link>
          </li>
          <li className="navbar-item" >
          <Link to="/aboutUs" className="nav-link">About Us</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signUp" className="nav-link">Sign Up</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
        </div>
      </nav>
      </div>
    );
  }
}
  
  //when user clicks on logout => delete token from local storage
  function handleLogoutClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    localStorage.clear();
    window.location = "http://localhost:3000/";
  }
  