import './App.css'
import { Routes, Route, Link } from 'react-router';
import Login from './components/Login'
import EntrySubmission from './components/MainEntryPage/EntrySubmission'
import AboutPage from './components/AboutPage'

function App() {

  return (
    <div>
      <h1>Remember This Day</h1>
      <nav>
        <Link to="/about">About this application</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/entries" element={<EntrySubmission/>}/>
      </Routes>
    </div>
  )
}

export default App
