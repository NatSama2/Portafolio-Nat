import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 All rights reserved.</p>
      <div className={styles['social-links']}>
        <a href="https://www.facebook.com/codebustler" target="_blank" rel="noreferrer">
          <i className={`fab fa-facebook ${styles.logos}`}></i>
        </a>
        <a href="https://www.twitter.com/nat_sama2" target="_blank" rel="noreferrer">
          <i className={`fab fa-twitter ${styles.logos}`}></i>
        </a>
        <a href="https://www.instagram.com/codebustler" target="_blank" rel="noreferrer">
          <i className={`fab fa-instagram ${styles.logos}`}></i>
        </a>
        <a href="https://www.youtube.com/@codebustler" target="_blank" rel="noreferrer">
          <i className={`fab fa-youtube ${styles.logos}`}></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;