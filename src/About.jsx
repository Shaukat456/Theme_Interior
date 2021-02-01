import React from 'react'
import { Image, Col, Fade } from 'react-bootstrap'
import pic from '../src/pcc.jpg'
import 'react-reveal'
import { Slide, LightSpeed } from 'react-reveal'





const About = () => {
    return (
        <>
        {/* <link rel="stylesheet" href="about.css"/> */}
            <div className="About">


            <Slide left >
            <h1 id='foun'> FOUNDER</h1>
        </Slide>
           <img   id='abpic' src={pic} alt="FOUNDER"/>


            <Slide bottom >       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex minus explicabo molestias natus architecto nemo expedita debitis, est sed, dolor unde. Impedit itaque odit consectetur necessitatibus hic similique ea quam, harum quidem incidunt quisquam enim culpa magni unde perspiciatis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore in expedita itaque rem neque adipisci deserunt facilis, nemo quae quo saepe at tempora recusandae consequatur minus quidem similique maxime non, obcaecati beatae repellendus voluptatibus. Quae numquam hic obcaecati incidunt adipisci earum animi suscipit nulla assumenda facilis nam fugit porro, aspernatur est tempore ducimus laudantium consequatur dolore vel? Eveniet pariatur repellendus ipsam fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio impedit tenetur architecto corrupti doloribus animi nisi voluptates praesentium incidunt. Repellat, eaque inventore? Sunt ea asperiores impedit! Necessitatibus nesciunt sequi quaerat, itaque alias repellat ex ad optio consequatur distinctio sint velit? Sunt tempora suscipit doloremque ullam amet, ex unde consectetur. Enim nostrum, laudantium cupiditate doloremque consectetur quos, animi unde dolore molestiae, repellendus earum. Necessitatibus praesentium, quam quos molestiae nesciunt voluptas labore odit obcaecati magnam eaque incidunt debitis expedita adipisci iste, perspiciatis sed ratione officiis mollitia repellendus. Impedit omnis laudantium labore odio perspiciatis sed unde iusto facilis velit quam. Earum, magni.  repudiandae ex eveniet aliquam, voluptates voluptate fugiat deleniti sit. Nesciunt, optio unde aperiam eaque explicabo provident temporibus delectus a consequatur dignissimos, nemo nihil repellendquibusdam aliquid a aliquam optio debitis in cumque vero ullam error fuga recusandae cum sapiente, voluptas vitae numquam! Magnam quaerat ipsam dolorem! laboriosam quidem, officiis magnam nobis. Pariatur, a. Natus harum libero nam. Ab.</p>
            </Slide>
        

            </div>
            
            
        </>
    )



}
export default About;