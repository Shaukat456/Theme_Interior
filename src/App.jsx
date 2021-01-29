import React from 'react'
import { Collapse, render } from 'react'
import './index.css';
import Products from './Products'
import { Zoom, Slide, Rotate } from 'react-reveal'



// import ComA from './ComA'
import Data from './Data';
// import Component from './Component'
// import express from 'express'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'

import Header from './Header'
import Home from './Home'
import { Route, Switch } from 'react-browser-router'

const App = () => {
    return (
        <>
            <Switch>
            </Switch>
                {/* <Route component={Home} exact  path='/'       />        */}
                {/* <Route component={Contact } exact  path='/Contact '       />        */}
                {/* <Route component={Order} exact  path='/input '       />        */}
                <Header />

                <Home />









        </>
    )
}


export default App;

// for (let i=-1; i<arr.length; i++)