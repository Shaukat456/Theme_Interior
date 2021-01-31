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
import About from './About'
import { Route, Switch } from 'react-browser-router'

const App = () => {


    
    

    return (
        <>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            </Switch>
{/*                
                <Header />
                <About/> */}
                {/* <Home/> */}
              

                {/* <Home /> */}









        </>
    )
}


export default App;



// const Preloader=()=>{
//     return(
// <>
//           <div className="loader" 
//           onLoad={hide} 
//           id='loader'>
//                 <h5>loading</h5>
//           </div>

//           </>
//     )
// }

// function hide(){
//     document.getElementById('loader').style.display='hide'
// }