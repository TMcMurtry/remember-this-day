import './App.css'
import { Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import Login from './components/Login'
import EntrySubmission from './components/MainEntryPage/EntrySubmission'
import AboutPage from './components/AboutPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  return (
    <div>
      <h1>Remember This Day</h1>
      <nav>
        <Link to="/about">About this application</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/entries" element={<EntrySubmission/>}/>
      </Routes>
    </div>
  )
}

export default App
