import "./Footer.css";
import {
  FaCopyright,
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a
            href="mailto:puentechcompany@gmail.com"
            className="footer-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="footer-text">
          <FaCopyright /> 2024 Puentech Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
