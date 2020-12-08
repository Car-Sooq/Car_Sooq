import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Car Sooq</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto" >
          <li className="navbar-item" >
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li className="navbar-item" >
          <Link to="/sellCar" className="nav-link">Sell Car</Link>
          </li>
          <li className="navbar-item">
          <Link to="/myCars" className="nav-link">My Cars</Link>
          </li>
          <li className="navbar-item">
          <Link to="/logout" className="nav-link">Log out</Link>
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