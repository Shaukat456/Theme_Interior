import React from 'react'
import { Image, Col, Fade } from 'react-bootstrap'
import pic from '../src/mypic.jpg'
import 'react-reveal'
import { Slide, LightSpeed } from 'react-reveal'
import './mobile.css'





const About = () => {
    return (
        <>
        {/* <link rel="stylesheet" href="about.css"/> */}
            <div className="About">


            <Slide left >
            <h1 id='foun'> Shaukat Sohail</h1>
        </Slide>
           <img   id='abpic' src={pic} alt="FOUNDER"/>


            <Slide bottom >      <p>
                I am 19 currently in Intermediate, i am also   
                
                 a Mern Stack Developer who develops websites for various platforms, and being a Web app developer I am familar with
• JAVASCRIPT (ES5/6) • CSS3 • HTML5 • EXPRESS.js. • NODE.js • REACT.js • MATERIAL UI • JWT . • GITHUB


My stack completes the full cycle of web development hence I am a Full Stack Web Developer.</p>
            </Slide>
        

            </div>
            
            
        </>
    )



}
export default About;