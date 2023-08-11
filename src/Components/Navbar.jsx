import React from "react";
import { Link } from "react-router-dom";
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
        <Navbar.Brand className={styles.navName}> <Link  to="/">Giselle Cifuentes</Link> </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Nav className={`me-auto ${styles.nav}`}>

            <div className={styles.linkNav}> 
            <Nav.Link><Link  to="/aboutMe">  Sobre mí </Link> </Nav.Link>
            <Nav.Link><Link to="/tecnologias">  Tecnologías </Link></Nav.Link>
            <Nav.Link><Link to="/proyectos" > Proyectos</Link></Nav.Link>
            <Nav.Link><Link to="/juegos" >Juegos</Link></Nav.Link>

            <Nav.Link  className={styles.contactNav}> <Link to="/contacto"> Contacto</Link> </Nav.Link>
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
