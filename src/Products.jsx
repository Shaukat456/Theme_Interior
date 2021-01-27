import React from 'react'
import {Card,CardDeck , Image,Col} from 'react-bootstrap' 
const Products=(props)=>{
    return(
        <>
         <div className="SaleS">
         <h2>
          FURNITURES
        </h2>
        <h3> <a href="   "> {props.name} </a> </h3>
        <img src={props.img} alt="img"/>
        <p>{props.description}</p>
      </div>
    
      
        </>
    )
}



export default Products;