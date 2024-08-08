import React from 'react'
import {Component} from 'react'

//state variable
class App extends Component{

  state={
    users:[
     {id:99,brand:"Duke",price:10231},
     {id:98,brand:"pulsar",price:20001},
     {id:97,brand:"honda",price:24883},
     {id:96,brand:"pulsar",price:50000}
    ]
 }
render(){
   
  var res=this.state.users.map((item)=>{
    
    return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
            </tr>
  })

return(
  <table width="100%" border="1">
    <thead>
      <tr>
        <th>id</th>
        <th>brand</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
       {res}
    </tbody>
  </table>
)

}
}
export default App



// Array list
/*class App extends Component{
  
  render(){

    var arr=[10,20,30,40];

    var res=arr.map((val)=>{
      return <li>{val}</li>
    })
    return(
      <div>
        <ul>{res}</ul>  
      </div>
    )
  }
}

export default App;*/