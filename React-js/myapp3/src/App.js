import React from 'react'
import AComponent from './AComponent'
export const UseContext=React.createContext();
function App() {
  return (
    <div>
      <UseContext.Provider value={'Java'}>
      <AComponent/>
      </UseContext.Provider>
      
    </div>
  )
}


export default App
