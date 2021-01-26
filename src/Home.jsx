import React from 'react'
import { createContext ,useState,render} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  'react-bootstrap'

import Header from './Header'

// import { Navbar,Nav, NavDropdown} from 'react-bootstrap'


const Home = () => {
    return(
      <>


      <div  className='firstp'  >
<h1>THEME INTERIOR </h1>
     <p>WE CREATE HOMES</p>
                </div>  

      

      <div className="SaleS">
        <h3>
          FURNITURES
        </h3>
        <li> <a href=""> Sofas </a> </li>
        <li> <a href=""> Coffee Tables </a> </li>
        <li> <a href=""> Bed </a> </li>
        <li> <a href="">  Cupboards </a> </li>
      </div>
    


      </>
    )
   
}

export default Home;
