import React, { Component } from "react";

export default class BuggyCounter extends Component {
   constructor(props){
         super(props)
         this.state={
            counter : 0,
         }
   }
    increment = () =>{
   this.setState(({counter})=>({
    counter: counter + 1
   }))
   }
  render() {
    if(this.state.counter === 5){
        throw new Error('i crashed!');
    }
    return <>
    <h1>{this.state.counter}</h1>
    <button onClick={this.increment}>increment</button>
    </>
  }
}
