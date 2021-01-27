import React from 'react'
import {Collapse,render} from 'react'
import './index.css';
import Products from './Products'



// import ComA from './ComA'
import Data from './Data';
// import Component from './Component'
// import express from 'express'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap'

import Header from './Header'
import Home from './Home'
 

const App = () => {
    return (
        <>
        <Header/>
        <Home/>
      
        </>
    )
}


export default App;

// for (let i=-1; i<arr.length; i++)