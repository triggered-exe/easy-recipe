import React from 'react';
import styles from './Footer.module.css'; // Update the import statement according to your file structure

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerSection} ${styles.about}`}>
          <h2>About Us</h2>
          <p>
            Your food blogging site is dedicated to sharing delicious recipes, food tips, and culinary experiences.
          </p>
        </div>
        <div className={`${styles.footerSection} ${styles.quickLinks}`}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.contact}`}>
          <h2>Contact Us</h2>
          <p>
            Email: contact@example.com <br />
            Phone: +1234567890 <br />
            Address: 123 Food Street, City, Country
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} Food Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
