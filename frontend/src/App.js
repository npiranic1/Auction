import logo from './logo.svg';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Spinner, Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar fixed="top">
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px"/>{' '}
            Auction
          </Navbar.Brand>

          <Spinner>
            Ovdje treba da se nalazi search bar
          </Spinner>

          <Nav>
            <Nav.Link href="home">HOME</Nav.Link>
            <Nav.Link href="shop">SHOP</Nav.Link>
            <Nav.Link href="myAccout">MY ACCOUNT</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
}

export default App;
