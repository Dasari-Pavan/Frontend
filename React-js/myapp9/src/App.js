import {Component} from 'react'

class App extends Component{

  state={
    name:"Pavan",
    love:"Dady"
  }
  // updating state variable using setState
  handleClick=()=>{
    this.setState({name:"Dasari" ,love:"mom"})
  }

  render()
  {
    return(
      <>
      <h1>name:{this.state.name}</h1>
      <h1>Love:{this.state.love}</h1>
      <button onClick={this.handleClick}>Click to change data</button>
      {/* <button onClick={this.handleClicks}>Click to change data</button> */}
      </>
    )
  }
}
export default App