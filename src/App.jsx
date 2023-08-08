
import {Routes, Route} from "react-router-dom"
import './App.css'
//import comps here
import Home from "./components/Home"
import Nav from "./components/Nav"
import Profile from "./components/Profile"
import Dashboard from "./components/Dashboard"

function App() {
  

  return (
    //put routes here
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/nav" element={<Nav/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
