import React from 'react'
import { UseContext } from './App'
function CComponent() {
  return (
    <div>
<UseContext.Consumer>
    {
      user=>{
        return<div>{user}</div>
      }   
    }
</UseContext.Consumer>
    </div>
  )
}

export default CComponent
