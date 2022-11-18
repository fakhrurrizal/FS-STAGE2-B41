import React, { useState }from "react";
import { Container, Nav, Navbar, Button, Stack, Dropdown } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBrancket, faUser } from '@fortawesome/free-solid-svg-icons'
import users from '../assets/image/users.svg';
import Logo from "../assets/image/logo.svg";
import Cart from '../assets/image/cart.svg';

import Login from "../auth/Login";
import Register from "../auth/Register";

function Navbars() {
  

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Navbar className="navBar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo-navbar"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Stack direction="horizontal" gap={3}>
            <Button className="btnLogin" variant="outline-danger" onClick={() => setShowLogin(true)}>Login</Button>
            <Button className='btnRegister' variant="danger" onClick={() => setShowRegister(true)}>Register</Button>
            <Login
                show={showLogin}
                onHide={() => setShowLogin(false)}
            />
            <Register 
                show={showRegister}
                onHide={() => setShowRegister(false)}
            />

          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;