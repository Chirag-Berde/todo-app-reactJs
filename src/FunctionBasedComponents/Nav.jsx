import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import { Link } from "react-router-dom";
import "../App.css"
import todoLogo from "./todoLogo.png"
const Main = () => {
  return (
    <>
      <Navbar bg="light" variant="light" className="sticky-top p-4 shadow">
        <Container>
          <Navbar.Brand className="navbar-custom fs-5" href="#home"><img className="todo-logo" src={todoLogo} alt="todologo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-link nav-link-ltr fs-5"><Link style={{textDecoration:"none"}}  to="/">Home</Link></Nav.Link>
            <Nav.Link className="nav-link nav-link-ltr fs-5"><Link style={{textDecoration:"none"}} to="/features">Features</Link></Nav.Link>
          </Nav>
          {/* <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <span className="text-dark fw-bolder">Welcome : - &nbsp; <i><u>Chirag Berde</u></i></span>
            </Navbar.Text>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  )
}
export default Main