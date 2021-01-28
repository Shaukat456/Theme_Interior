import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap'
import pi1 from '../src/picc.png'
import {Fade} from 'react-reveal'

const Header=()=>{
    return(
        <>
<Fade>      
<Navbar collapseOnSelect fixed='top' expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home"    >   React </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Price Search</Nav.Link>
      <NavDropdown title="Dropdown"  style={{transtion:'all .5s ease'}}  id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Order </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Fade>

        </>
    )




}

export default Header;