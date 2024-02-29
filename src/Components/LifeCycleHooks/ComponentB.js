import React, { Component } from "react";

export default class ComponentB extends Component {
    componentDidMount(){
        console.log('ComponentB')
    }
  render() {
    return <div>ComponentB</div>;
  }
}
