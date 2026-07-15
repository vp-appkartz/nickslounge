import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg xmlns="http://www.3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="brand">
            <img src="/media/logo.jpeg" alt="Nick's Lounge" className="nav-logo" style={{ height: '120px' }} />
          </Link>
          <p className="footer-desc">
            Experience the finest food and drinks in town. Join us for happy hour, dinner, or a night out with friends!
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/18Rcyr797M/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/nickslounge?igsh=MXczeTgxdDR0OGwxZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>123 Lounge Street, Cityville, ST 12345</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>(555) 123-4567</span>
            </li>
            <li>
              <Clock size={18} className="contact-icon" />
              <div>
                <p>Mon - Thu: 11:00 AM - 11:00 PM</p>
                <p>Fri - Sat: 11:00 AM - 1:00 AM</p>
                <p>Sun: 12:00 PM - 10:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Nick's Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
