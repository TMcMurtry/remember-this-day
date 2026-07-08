import './App.css'
import { Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import Login from './components/Login'
import EntrySubmission from './components/MainEntryPage/EntrySubmission'
import AboutPage from './components/AboutPage'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  return (
    <div>
      <Header/>
      <nav>
        <Link to="/about">About this application</Link>
      </nav>
      { !isLoggedIn ?
      <Routes>
        <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes> :
       <Routes>
        <Route path="/" element={<EntrySubmission/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      }
      <Footer/>
    </div>
  )
}

export default App
