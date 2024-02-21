import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home,About,Projects,Contact} from "../src/pages/index"
import Navbar from './components/Navbar';

const App = () => {
  return (
   <main className='bg-slate-300/20 h-full'>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/Contact' element={<Contact/>} />
          
          
      </Routes>
    </BrowserRouter>
   </main>
  )
}

export default App