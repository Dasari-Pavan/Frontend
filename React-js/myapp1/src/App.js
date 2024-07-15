
import React, { useEffect } from 'react'
import {useState} from 'react';

function App(){
    const[name,setName]=useState("Pavan");
    const[count,setCount]=useState(0);
    const handleClick=()=>
    {
        setName("Dasari");
    }

    const Increment=()=>
    {
      setCount(count+1);
    }

    useEffect(()=>
    {
      document.title=`You have click ${count} times`;
    })


    return(
        <div>
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}
export default App;