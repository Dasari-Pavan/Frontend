import React from 'react'
import CustomHook from './CustomHook'
function App() 
{
  const data=CustomHook();

    
  return (
    <div>
      <h1>{data.count}</h1>
      <button onClick={data.handleClick}>Increment</button>
    </div>
  )
}
export default App
