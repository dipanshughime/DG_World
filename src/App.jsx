import React from 'react'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact  from './Pages/Contact'
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>

          
        </Routes>
      </Router>

    </main>

  )
}

export default App