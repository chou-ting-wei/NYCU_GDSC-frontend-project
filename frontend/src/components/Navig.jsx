import { Link } from "react-router-dom";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navig = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container>
        <Navbar.Brand>GDSC Frontend</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">首頁</Nav.Link>
            <Nav.Link as={Link} to="/FHH">To-Do List</Nav.Link>
            <Nav.Link as={Link} to="/iris">攝影作品集</Nav.Link>
            <Nav.Link as={Link} to="/Cy407">Album Gallery</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default Navig;