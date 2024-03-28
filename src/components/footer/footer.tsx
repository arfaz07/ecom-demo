import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.picassoFooter}>
      <div className={styles.footerNavigation}>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerContact}>
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className={styles.footerSocial}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            className={styles.socialIcon}
          >
            FB
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className={styles.socialIcon}
          >
            TW
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className={styles.socialIcon}
          >
            IG
          </a>
        </div>
      </div>
      <div className={styles.footerArt}>
        <canvas id="picassoCanvas"></canvas>
      </div>
    </footer>
  );
};

export default Footer;
