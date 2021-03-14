import React from 'react'
import { useState } from 'react';



const C=()=>{

    const [Name,GetName]=useState('Your name')
    const [NewName ,ShowName]=useState()
    function Ch(e){
        GetName(e.target.value )
    }

    function named (){
        ShowName('hello ')

    
    }


   return(
       <>
        <div id='c'> 
   <h1> {Name}</h1>
   <input type="text" onChange={Ch} />
    <button onClick={named}>CLICK</button>
        </div>



        
       </>
   ) 

}


export default C;
    
