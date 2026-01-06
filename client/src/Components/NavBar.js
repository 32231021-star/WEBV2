import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      
      <div className="leftSide">
        <Link to="/cart" className="cart-btn" aria-label="Cart">
          🛒
        </Link>
      </div>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    
      <div className={`rightSide ${menuOpen ? "open" : ""}`}>
        <Link to="/fruits" onClick={() => setMenuOpen(false)}>Fruits</Link>
        <Link to="/cosmetics" onClick={() => setMenuOpen(false)}>Cosmetics</Link>
        <Link to="/breakfast" onClick={() => setMenuOpen(false)}>Breakfast</Link>
        <Link to="/detergent" onClick={() => setMenuOpen(false)}>Detergent</Link>
        <Link to="/dryfood" onClick={() => setMenuOpen(false)}>Dry Foods_Pantry</Link>
        <Link to="/review-order" onClick={() => setMenuOpen(false)}>Contact Us</Link>

       
        <Link
          to="/admin/login"
          className="admin-icon"
          title="Admin Login"
          aria-label="Admin Login"
          onClick={() => setMenuOpen(false)}
        >
          <FaUserShield />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
