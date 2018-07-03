import React from 'react';
import logo from '../../src/logo.png';
const Header = () => {
  return (
    <header>
      <div className="header-wrapper container">
        <h1 className="logo">
          <img src={logo} alt="" />
        </h1>
      </div>
    </header>
  );
};

export default Header;
