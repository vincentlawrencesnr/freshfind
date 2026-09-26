import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');

    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');

    setLoggedInUser(null);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        <NavLink
          to="/"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="FreshFind home"
        >
          <span className="navbar__brand-icon" aria-hidden="true">
            <i className="bi bi-leaf-fill"></i>
          </span>

          <span>FreshFind</span>
        </NavLink>

        <button
          type="button"
          className="navbar__menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <i
            className={`bi ${
              isMenuOpen ? 'bi-x-lg' : 'bi-list'
            }`}
            aria-hidden="true"
          ></i>
        </button>

        <nav
          id="main-navigation"
          className={`navbar__navigation ${
            isMenuOpen ? 'navbar__navigation--open' : ''
          }`}
          aria-label="Main navigation"
        >
          <div className="navbar__links">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/markets" onClick={closeMenu}>
              Markets
            </NavLink>

            <NavLink to="/produce" onClick={closeMenu}>
              Produce Guide
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink to="/chatbot">
              Chatbot
            </NavLink>

            <NavLink to="/bookmarks" onClick={closeMenu}>
              Bookmarks
            </NavLink>

            {loggedInUser ? (
              <div className="navbar__user">
                <span>
                  Hi, {loggedInUser.name}
                </span>

                <button
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/auth">
                Login / Signup
              </NavLink>
            )}
          </div>

          <NavLink
            to="/markets"
            className="navbar__cta"
            onClick={closeMenu}
          >
            <i className="bi bi-search" aria-hidden="true"></i>
            <span>Find a Market</span>
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;