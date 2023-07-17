import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/navbar.module.css';

function Navbars() {
  return (
    <Navbar expand="lg" className={`${styles.navbar} ${styles.bgBodyTertiary}`}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.nav}`}>
            <Nav.Link href="#home" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" className={styles.navLink}>
              Link
            </Nav.Link>
            <NavDropdown
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;