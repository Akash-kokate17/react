import React, { Component } from "react";

export default class LifeCycleDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      userInfo: {},
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData(id) {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${this.state.id}`
    );
    let userInfo = await res.json();
    console.log(userInfo);
    this.setState({ userInfo: userInfo });
  }
  increment = () => {
    this.setState({ id: this.state.id + 1 });
  };

  componentDidMount() {
    this.fetchData(this.state.id);
  }

     componentDidUpdate(prevProps, prevState) {
      if (this.state.id !== prevState.id) {
        this.fetchData(this.state.id);
      }
    }  
  render() {
    return (
      <>
        <h1>this is user id {this.state.id} for check user data see console</h1>
        <p>
          <button onClick={this.increment}>increment</button>
        </p>
        <he />

        <div className=" col-sm-3 container-fluid">
          <div className="card text-center">
            <div className="card-header">
              <img
                src="https://img.lovepik.com/element/45001/3052.png_860.png"
                style={{ height: "200px" }}
               alt='img'/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.state.userInfo.name}</h5>
              <p className="card-text">{this.state.userInfo.email}</p>
              <p className="card-text">{this.state.userInfo.city}</p>
              <p className="card-text">{this.state.userInfo.phone}</p>
              <p className="card-text"></p>
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
