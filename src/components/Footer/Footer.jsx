import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__main">

          <div className="footer__brand">
            <Link
              to="/"
              className="footer__logo"
              aria-label="FreshFind home"
            >
              <span
                className="footer__logo-icon"
                aria-hidden="true"
              >
                <i className="bi bi-leaf-fill"></i>
              </span>

              <span>FreshFind</span>
            </Link>

            <p>
              Discover fresh local markets, seasonal
              produce, and growers in your area.
            </p>
          </div>

          <div className="footer__links">

            <div className="footer__column">
              <h2>Explore</h2>

              <Link to="/">
                Home
              </Link>

              <Link to="/markets">
                Markets
              </Link>

              <Link to="/produce">
                Produce Guide
              </Link>

              <Link to="/bookmarks">
                Bookmarks
              </Link>
            </div>

            <div className="footer__column">
              <h2>Support</h2>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/contact">
                Contact Us
              </Link>

              <Link to="/chatbot">
                Chatbot
              </Link>

              <Link to="/auth">
                Login / Signup
              </Link>
            </div>

          </div>

        </div>

        <div className="footer__bottom">

          <p>
            © {new Date().getFullYear()} FreshFind.
            All rights reserved.
          </p>

          <p>
            Built with React
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;