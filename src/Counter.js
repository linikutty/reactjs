// import React,{ Component } from 'react';

// class Counter extends Component{
//     constructor(props){
//         super(props)
//         // this.state={
//         //     count:0
//         // }
//     }
    // increment = () =>{
    //     this.setState({count:this.state.count + 1});
    // }

    // decrement = () =>{
    //     this.setState({count:this.state.count - 1});
    // }


//     render(){
//         return(
//             <div className="Counter">
//                 {/* <button onclick={this.increment} className="counter">+</button> */}
//                 {/* <button onclick={this.decrement} className="counter" >-</button> */}
//             </div>
//         );
//     }
// }

import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}


export default Car