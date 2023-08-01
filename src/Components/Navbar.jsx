import React from "react";
import { Navigate } from 'react-router-dom'; 
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/navbar.module.css";

function Navbars() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <img className="navImg" src="src/assets/Gc2.png"></img>
        <Navbar.Brand className={styles.navName} onClick={() => <Navigate to="/" />} >Giselle Cifuentes</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className={`me-auto ${styles.nav}`}>

            <div className={styles.linkNav}> 
            <Nav.Link  onClick={() => <Navigate to="/aboutMe" />} >Sobre mí</Nav.Link>
            <Nav.Link  onClick={() => <Navigate to="/tecnologias" />} >Tecnologías</Nav.Link>
            <Nav.Link  onClick={() => <Navigate to="/proyectos" />} >Proyectos</Nav.Link>
            <Nav.Link  onClick={() => <Navigate to="/juegos" />} >Juegos</Nav.Link>
            <Nav.Link  className={styles.contactNav} onClick={() => <Navigate to="/contacto" />} >Contacto</Nav.Link>
            </div>


          {/*             <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className={styles.navDropdown}
            >
              <NavDropdown.Item href="#action/3.1" className={styles.dropdownItem}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className={styles.dropdownItem}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className={styles.dropdownItem}>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className={styles.dropdownItem}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </Navbar.Collapse> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars;
