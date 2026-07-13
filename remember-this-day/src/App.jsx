import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
 
  return (
    <div >
      <Header isLoggedIn={isLoggedIn}/>
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
        currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Footer/>
    </div>
  )
}

export default App
