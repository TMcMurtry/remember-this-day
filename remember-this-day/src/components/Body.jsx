import { Routes, Route } from 'react-router';
import Login from './Login';
import AboutPage from './AboutPage';
import EntrySubmission from './MainEntryPage/EntrySubmission'
import './Body.css'


export default function Body({currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn}){

    return(
<div className={!isLoggedIn? "body loginPage": "body mainPage"}>
      { !isLoggedIn ?
      <Routes>
        <Route path="/" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes> :
       <Routes>
        <Route path="/" element={<EntrySubmission currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      }
      </div>
    )
}