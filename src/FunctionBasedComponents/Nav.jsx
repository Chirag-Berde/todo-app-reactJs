import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">ToDo's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:"none",color:"white"}} to="/features">Features</Link></Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              By : - &nbsp; <i><u>Chirag Berde</u></i>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
export default Main