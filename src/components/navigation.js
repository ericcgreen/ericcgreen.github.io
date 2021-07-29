import React, { useState, useEffect } from 'react';

export default function Navigation({ props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/" aria-label="Home">
          <img src="/EG.png" alt="Home" width="28" height="28" />
        </a>
        <div className="navbar-burger" data-target="navbarExampleTransparentExample" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">

          <a className="navbar-item">
            About
          </a>

          <a className="navbar-item">
            Portfolio
          </a>

          <a className="navbar-item">
            Resume
          </a>

          <a className="navbar-item">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

