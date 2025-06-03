import React, { useState } from "react";
import "./Nav.css";


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); 
  const ProfileName = () => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      alert(`Welcome, ${userName}!`);
    } else {
      alert("Please log in to see your profile.");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo" >V-Shop</h1>

       
        <h1
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          style={{ cursor: "pointer" }}
        >
          {menuOpen ? "❌" : "▤"}
        </h1>

        <ul className={`navbar-menu${menuOpen ? " open" : ""}`}>
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="/#cart">Cart</a></li>
         
        
        </ul>
        <div className="cartpart">
       
          <button className="cart-button" ><a href="/#cart"> 🛒</a>
           
          </button>
          <button className="profile-button" onClick={ProfileName}><a href="/profile">👤</a></button>
          
        </div>
      </div>

     
    </nav>
  );
}

export default Nav;
