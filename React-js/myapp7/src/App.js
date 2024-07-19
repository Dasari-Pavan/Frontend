// eslint-disable-next-line
import React from 'react'
import { useState } from 'react'

function App()
{
  const[userRegistration,setUserRegistration]=useState({
        username:"",
        password:"",
        date:"",
        category:""
  })

  const handleChange=(e)=>
  {
    const name=e.target.name;
    const value=e.target.value;
    setUserRegistration({...userRegistration,[name]:value})
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    setUserRegistration({username:"",password:"",date:"",category:""})
  }

  return(
      <div className='container mt-3 '>
        <div className='row w-50'>
        <h2 className='text-center' style={{textDecoration:"underline"}}>UserDetails</h2>
        
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor='username' className='my-3'>Username:</label>
          <input type="text" name="username" className='form-control'
          value={userRegistration.username}
          onChange={handleChange}/>

          <label htmlFor='Password' className='my-3'>Password:</label>
          <input type='password' name='password' className='form-control'
          value={userRegistration.password}
          onChange={handleChange}/>
      
          <label htmlFor='date' className='my-3'>Date:</label>
          <input type='date' name='date' className='form-control'
          value={userRegistration.date}
          onChange={handleChange}/>

          <label htmlFor='category' className='my-3'>category:</label>
          <select className='form-control' name='category'
          value={userRegistration.category}
          onChange={handleChange}>
            <option value="">none</option>
            <option value="Entertainment">Entertainment</option>
            <option value="horror">Horror</option>
            <option value="Comedy">Comedy</option>
          </select>

          <input type="submit" value='submit' className='my-3 btn btn-outline-primary form-control'/>
        </form>
        </div>
      </div>
  )
}
export default App