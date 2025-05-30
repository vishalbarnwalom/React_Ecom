import React from "react";
import "./Nav.css";

function Nav() {
const [menuOpen, setMenuOpen] = React.useState(false);

return (
    <nav className="navbar">
        <div className="navbar-container">
            <h1 className="navbar-logo">V-Shop</h1>
            <h1
                className="menu-button"
                onClick={() => setMenuOpen((open) => !open)}
                style={{ cursor: "pointer" }}
            >
                 {menuOpen ? "❌" : "▤"}
            </h1>
            <ul className={`navbar-menu${menuOpen ? " open" : ""}`}>
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="#products">Products</a></li>
                {/* <li className="navbar-item"><a href="#about">About Us</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li> */}
            </ul>
        </div>
    </nav>
);
}
export default Nav;