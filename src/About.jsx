import React from 'react'
import { Image, Col, Fade } from 'react-bootstrap'
import pic from '../src/pcc.jpg'
import 'react-reveal'
import { Slide, LightSpeed } from 'react-reveal'


const About = () => {
    return (
        <>
        
            <div className='About'> 
            <Slide left >
            <h1 id='foun'> FOUNDER</h1>
        </Slide>
        

            
            
            


          
           <img   id='abpic' src={pic} alt="FOUNDER"/>


            <Slide bottom >       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex minus explicabo molestias natus architecto nemo expedita debitis, est sed, dolor unde. Impedit itaque odit consectetur necessitatibus hic similique ea quam, harum quidem incidunt quisquam enim culpa magni unde perspiciatis, repudiandae ex eveniet aliquam, voluptates voluptate fugiat deleniti sit. Nesciunt, optio unde aperiam eaque explicabo provident temporibus delectus a consequatur dignissimos, nemo nihil repellendquibusdam aliquid a aliquam optio debitis in cumque vero ullam error fuga recusandae cum sapiente, voluptas vitae numquam! Magnam quaerat ipsam dolorem! laboriosam quidem, officiis magnam nobis. Pariatur, a. Natus harum libero nam. Ab.</p>
            </Slide>
        
            
            
            </div>
        </>
    )



}
export default About;