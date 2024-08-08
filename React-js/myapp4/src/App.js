import React from 'react'
import CustomHook from './CustomHook'
function App() 
{
const data=CustomHook();    
  return (
    <>
      <h1>{data.count}</h1>
      <button onClick={data.handleClick}>Increment</button>
    </>
  )
}
export default App
