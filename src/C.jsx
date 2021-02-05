import React from 'react'

// class Counter extends React.Component{
//     constructor(props){
//         console.log('Constructed')
//         super(props)

//         this.state={
//             counter:0
//         }

//         this.inc=()=>this.setState({counter:this.state.counter +1})
//         this.dec=()=>this.setState({counter:this.state.counter -1})
//     }
//     componentDidMount(){
//         console.log('Component did mount')
//         alert('Component Mounted')
//     }

//     render(){
//         console.log('render')

//         return <div>
//             <button onClick={this.dec}>decrease</button>
//             <button onClick={this.inc}>increase</button>
//            <h1>     Counter:{this.state.counter}</h1> 
//         </div>
//     }
//     componentDidUpdate(prevProps,prevState,snapshot){
//         console.log('Component did update')

//     }
    
