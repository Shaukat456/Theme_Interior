import React from 'react'
import {usestate ,  createContext, useState, render } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Products from './Products'
import Header from './Header'
import './mobile.css'
// import Home from './Home'
import picc from '../src/pic1.jpg'
import { Slide, Zoom, LightSpeed ,Fade} from 'react-reveal';
// import { Fade } from 'react-bootstrap';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap'
import About from './About'
import Furniture from './Data'
import C from './C'
const Home = () => {



//Component Rendering
function furnitures(val){
return(
      <>
                   <Products
                              name={val.name}
                              img={val.img}
                              description={val.description}
                        />


      </>
)
}

      return (
            <>

                
                  <div className='firstp'  >
                        <Fade bottom  duration={2500}>
                              <h1>SHAUKAT SOHAIL       </h1>
                        </Fade>
                        <Fade bottom  >
                              <p>Your Idea,My Code</p>

                        </Fade>
                        <button className='resume'>RESUME</button>



                      </div>
                 
            </>
      )

}

export default Home;
