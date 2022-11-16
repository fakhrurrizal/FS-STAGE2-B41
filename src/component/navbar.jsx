import React, { useState }from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/image/logo.png"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Login from "../auth/Login";
import Register from "../auth/Register";

function Navbars() {


  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Navbar bg="light" expand="lg">
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