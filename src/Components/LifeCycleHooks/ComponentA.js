import React, { Component } from "react";

export default class ComponentA extends Component {
  componentDidMount() {
    console.log("ComponentA");
  this.clear =   setInterval(() => {
      console.log("this is setInterval of A");
    }, 500);
  }
  componentWillUnmount(){
    console.log('componentA will unmount ')
   clearInterval(this.clear)
  }
  render() {
    return <div>ComponentA</div>;
  }
}
