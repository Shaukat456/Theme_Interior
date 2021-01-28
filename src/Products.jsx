import React from 'react'
import {Card,CardDeck , Image,Col} from 'react-bootstrap' 
import {Slide ,Zoom,Fade} from  'react-reveal'


const Products=(props)=>{
    return(
        <> 

        <Slide  bottom>          
        <h3> <a href="   "> {props.name} </a> </h3>
        </Slide>
        <Fade bottom>   


        <img src={props.img} alt="img"/>
        <p>{props.description}</p>

        </Fade>
    
        
      
        </>
    )
}



export default Products;