import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/js/Header'
import Routes from 'components/js/Routes'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
