import React from 'react'
import {useState} from 'react'
import axios from 'axios'


function FetchApi()
{
    const [data,setdata]=useState([])
    
   const handleClick=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        
        .then(response=>
        {
            setdata(response.data)
        })
        .catch(error=>{
          this.setrData(error)
        })
    }
   
     
       
    return(
        <div>
            <center>
            <button onClick={handleClick}>
               Fetch Api
            </button>
            <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>name</td>
                    <td>age</td>
                </tr>
            </thead>
            <tbody>
                    data.map((data)=>
                    {
                         return        <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.employee_name}</td>
                                    <td>{data.employee_age}</td>
                                </tr>
                    })
                
            </tbody>
            </table>   
            </center>
        </div>
    )
}

export default FetchApi