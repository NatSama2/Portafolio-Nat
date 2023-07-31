import React from 'react';
import styles from "../styles/home.module.css";
import Navbars from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Navbars />
      <div className={styles.banner}>
        <img src="src/assets/baner.png" alt="Banner" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
