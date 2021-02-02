import React from 'react'
import {usestate ,  createContext, useState, render } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Products from './Products'
import Header from './Header'
// import Home from './Home'
import picc from '../src/pic1.jpg'
import { Slide, Zoom, LightSpeed ,Fade} from 'react-reveal';
// import { Fade } from 'react-bootstrap';
// import { Navbar,Nav, NavDropdown} from 'react-bootstrap'
import About from './About'
import Furniture from './Data'

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
                        <Fade bottom>
                              <h1>THEME INTERIOR </h1>
                        </Fade>
                        <Fade bottom  >
                              <p>WE CREATE HOMES</p>

                        </Fade>


                        {/* <button>       <sup>                SHOP NOW         </sup>  </button>  */}
                  </div>



                  {/* <div className='SaleS'>
                        
                  {Furniture.map(furnitures)}
                         */}
                        {/* <Products
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
                   */}

                  {/* </div> */}
               
      
                 
            </>
      )

}

export default Home;
