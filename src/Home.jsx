import React from 'react'
import { createContext ,useState,render} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  'react-bootstrap'
import Products from './Products'
import Header from './Header'
import picc from '../src/pic1.jpg'
// import { Navbar,Nav, NavDropdown} from 'react-bootstrap'


const Home = () => {
    return(
      <>

      
      <div  className='firstp'  >
<h1>THEME INTERIOR </h1>
     <p>WE CREATE HOMES</p>
                </div>  
<div className='PR' >

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
