import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; // Adjust the path to your logo

const Header = () => {
  return (
    <header style={headerStyle}>
      
      <div className="logo">
        <img src={logo} alt="Company Logo" style={logoStyle} />
      </div>

      
      <div className="company-name" style={companyNameStyle}>
        Hustlers
      </div>

      
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/">Home</Link></li>
          <li style={liStyle}><Link to="/products">Products</Link></li>
          <li style={liStyle}><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

// Inline styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#fff', 
  borderBottom: '1px solid #ccc', 
};

const logoStyle = {
  height: '80px', 
};

const companyNameStyle = {
  fontSize: '18px', 
};

const navStyle = {
  backgroundColor: '#fff', 
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: '0 10px',
};

export default Header;
