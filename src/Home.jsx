import React from 'react'
import { createContext, useState, render } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Products from './Products'
import Header from './Header'
import picc from '../src/pic1.jpg'
import { Slide, Zoom, LightSpeed ,Fade} from 'react-reveal';
// import { Fade } from 'react-bootstrap';
// import { Navbar,Nav, NavDropdown} from 'react-bootstrap'


const Home = () => {
      return (
            <>

                  <div className='firstp'  >
                        <Fade bottom>
                              <h1>THEME INTERIOR </h1>
                        </Fade>
                        <Fade bottom  >
                              <p>WE CREATE HOMES</p>

                        </Fade>

                  </div>



                  <div className='SaleS'>
                        <Products
                              name='TABLES'
                              img={picc}
                              description='13000PKR'
                        />



                        <Products
                              name='TABLES'
                              img={picc}
                              description='THIS IS A TABLE'
                        />

                        <Products

                              name='TABLES'
                              img={picc}
                              description='THIS IS A TABLE'
                        />
                        <Products
                              name='TABLES'
                              img={picc}
                              description='THIS IS A TABLE'
                        />
                  </div>

            </>
      )

}

export default Home;
