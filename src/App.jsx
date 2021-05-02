import React from 'react'
import { Collapse, render } from 'react'
import './index.css';
import Products from './Products'
import { Zoom, Slide, Rotate } from 'react-reveal'



// import ComA from './ComA'
import Data from './Data';
// import Component from './Component'
// import express from 'express'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'

import Header from './Header'
import Home from './Home'
import About from './About'
import { Route, Switch, Redirect } from 'react-browser-router'
// import Furnitures from './Data';
import Avail from './Avail'
import C from './C'
import Todo from './Todo'

const App = () => {

    return (
        <>
        <Header/>
           <Switch> 
          <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
             <Route exact path='/furniture' component={Avail} />
             <Route exact path='/new' component={C} />
             <Route exact path='/TodoApp' component={Todo} />
             
             <Redirect to='/'  />
             </Switch> 
                
            





           









        </>
    )
}
export default App;

// class App extends React.Component{
//     constructor(props){
//         super(props)

//         this.state={
//             mount:true

//         }

//         this.mountCounter=()=>this.setState({
//             mount:true
//         })
//         this.unmountCounter=()=>this.setState({
//             mount:false
//         })
//     }
//     render(){
//         return <div>
//             <button onClick={this.mountCounter} disabled={this.state.mount}  > Mount</button>
//             <button onClick={this.unmountCounter} disabled={!this.state.mount}> Unmount</button>
//     {this.state.mount?<Slide top duration={132}  >  <C/></Slide>   :null}
//         </div>
//     }
// }





// const Preloader=()=>{
//     return(
// <>
//           <div className="loader" 
//           onLoad={hide} 
//           id='loader'>
//                 <h5>loading</h5>
//           </div>

//           </>
//     )
// }

// function hide(){
//     document.getElementById('loader').style.display='hide'
// }