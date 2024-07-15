import React from 'react'
import AComponent from './AComponent'
export const UserContext=React.createContext();
function App() {
  return (
    <div>
      <UserContext.Provider value={'Java'}>
      <AComponent/>
      </UserContext.Provider>
      
    </div>
  )
}


export default App
