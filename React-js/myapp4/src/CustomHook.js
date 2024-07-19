// eslint-disable-next-line
import React from 'react';
import {useState} from 'react'

function CustomHook() {

    const [count,setCount]=useState(0);

    const handleClick=()=>
    {
        setCount(count+1);
    }
    
    return(
    { 
        count,  
        handleClick
    }
)
}

export default CustomHook
