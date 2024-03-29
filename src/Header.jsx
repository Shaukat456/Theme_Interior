import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap'
import pi1 from '../src/picc.png'
import {Fade,Slide,LightSpeed,Bounce} from 'react-reveal'
import { Route, Switch ,NavLink} from 'react-browser-router'


const Header=()=>{
    return(
        <>
     
{/* <NavLink to='/' > HOME</NavLink>
<NavLink to='/about' > About</NavLink> */}
       

<Nav className="justify-content-center  ml-5   headr" activeKey="/home">
    <Nav.Item >
    <NavLink  className='headr' to='/' >    Home </NavLink>
    </Nav.Item>
    <Nav.Item className='headr'>
      <NavLink eventKey="link-1" to='/about' >About Me</NavLink>
    </Nav.Item>
    <Nav.Item className='headr' >
      <NavLink eventKey="link-2" to='/furniture'>Works</NavLink>
    </Nav.Item>
    <Nav.Item className='headr' >
      <NavLink eventKey="link-2" to='/TodoApp'>Todo App </NavLink>
    </Nav.Item>
    <Nav.Item>
      {/* <NavLink eventKey="disabled"  >
        Disabled
      </NavLink> */}
    </Nav.Item>
      {/* <NavLink eventKey="link-3" to='/new'>new</NavLink> */}
  </Nav>

        </>
    )




}

export default Header;