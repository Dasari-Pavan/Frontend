import React, { Component } from 'react'

export default class App extends Component {
  
  state={
    no:100,
    name:"pavan"
  }

  handle=(e)=>{
    this.setState({no:99,name:"Dasari"})
  }

  
  render() {
    return (
      <div>
        <h1>no:{this.state.no}</h1>
        <h1>name:{this.state.name}</h1> 
        <button onClick={this.handle}>Update</button>     
      </div>
    )
  }
}
