import React from 'react'
import { UserContext } from './App'
function CComponent() {
  return (
    <div>
<UserContext.Consumer>
    {
      user=>{
        return<div>{user}</div>
      }   
    }
</UserContext.Consumer>
    </div>
  )
}

export default CComponent
