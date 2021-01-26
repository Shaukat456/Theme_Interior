import React from 'react'
import { createContext ,useState,render} from 'react'
// import ComA from './ComA'
import Data from './Data';
// import Component from './Component'
// import express from 'express'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Collapse} from 'react-bootstrap'

import Header from './Header'
// import { Navbar,Nav, NavDropdown} from 'react-bootstrap'


const Home = () => {
    function Example() {
        const [open, setOpen] = useState(false);
      
        return (
          <>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              click
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text mt-5 py-5">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </>
        );
      }
      
      render(<Example />);
   
}

export default Home;
