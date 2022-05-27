import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from 'components/Header'
import Home from 'pages/Home'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
