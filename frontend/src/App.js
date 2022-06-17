import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/js/Header'
import Routes from 'components/js/Routes'
import { useState } from 'react'
import { getUser } from 'utility/storageService'

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(!!getUser());

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes setIsLoggedIn={setIsLoggedIn}/>
      </div>
    </Router>
  );
}

export default App;
