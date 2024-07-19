import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>

        <Link style={{display:'block'}} to='/'>Home</Link>
        <Link style={{display:'block'}} to='/about'>About</Link>
        <Link style={{display:'block'}} to='/Contact'>Contact</Link>

      </nav>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
