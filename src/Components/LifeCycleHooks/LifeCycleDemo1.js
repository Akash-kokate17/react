import React, { Component } from "react";

export default class LifeCycleDemo1 extends Component {
  constructor(props) {
    console.log("hi i am constructor");
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  }
  //    static getDerivedStateFromProps(props, state) { // Rarely Used
  //     console.log('hi i am getDerivedStateFromProps')
  //     // return {counter:props.counter};
  //     return {state}
  //    }

  shouldComponentUpdate() {
    return true;
  }

componentDidUpdate(){
    console.log('component did update')
}

  getSnapshotBeforeUpdate(prevPops, prevState) {
    console.log(`prev value ${prevState.counter} next value ${this.state.counter}`);
    return null;
  }

  componentDidMount() {
    // this method load after render;
    console.log("hi i am componentDidMount ");
    document.getElementById("div1").style.color = "red";
  }

  render() {
    console.log("hi i am render");
    return (
      <>
        <h1 id="div1">Counter value is {this.state.counter}</h1>
        <p>
          <button onClick={this.increment}>increment</button>
        </p>
      </>
    );
  }
}
