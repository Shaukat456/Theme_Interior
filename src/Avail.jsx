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
import Furnitures from './Data'

const Avail = () => {



//Component Rendering
function n(val){
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



                  <div className='SaleS'>
                        
                  {Furnitures.map(n)}
                        
                       

                  </div>
               
      
                 
            </>
      )

}

export default Avail;
