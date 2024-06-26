import './App.css'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile />}/>
      <Route path="/navbar" element={<Navbar />}/>  
      <Route path="/card" element={<Card />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
