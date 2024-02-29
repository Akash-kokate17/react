import React, {  PureComponent } from 'react'

export default class PureDemo extends PureComponent {
    state = {
        color: 'red'
    }
    changeColor =() =>{
        this.setState({color:'blue'})
    }
  render() {
    console.log('color is render()')
    return (
        <>
     <h1>color is : {this.state.color}</h1>
     <button onClick={this.changeColor}>click</button>
     </>
    )
  }
}
