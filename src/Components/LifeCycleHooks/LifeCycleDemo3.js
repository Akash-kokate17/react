import React, { Component } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default class LifeCycleDemo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }
  componentDidMount() {
    console.log("lifeCycleDemo3");
  }
  render() {
    return (
      <>
        <h3>plz change the flag to load component conditional</h3>;
        <button
          onClick={() => {
            this.setState({ flag: !this.state.flag });
          }}
        >toggle component</button>
        {this.state.flag ? <ComponentA /> : <ComponentB />}
      </>
    );
  }
}
