import 'App.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'components/css/Header.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GavelIcon from '@mui/icons-material/Gavel';
import Text from 'react-text';
import {Link, withRouter} from 'react-router-dom'
import { clearSession } from 'utility/storageService.js'

function Header({isLoggedIn, setIsLoggedIn}) {
  
  function handleLogout(){
    clearSession();
    setIsLoggedIn(false);
  }

  return (
    <>
      <Navbar className="NavBarDark" fixed="top" bg="dark" variant="dark">
        <Nav.Link href="https://www.facebook.com/">
          <FacebookIcon className="navBarIcon"/>
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com/">
          <InstagramIcon className="navBarIcon"/>
        </Nav.Link>
        <Nav.Link href="https://twitter.com/">
          <TwitterIcon className="navBarIcon"/>
        </Nav.Link>
        <Nav.Link href="https://www.google.com/">
          <GoogleIcon className="navBarIcon" />
        </Nav.Link>

        {isLoggedIn ? <Link variant="dark" className="logout-button" to="/" onClick={handleLogout}>Logout</Link> : <><div className="login-registration-buttons-wrapper"><Link variant="dark" className="login-registration-button" to="/login">Login</Link><div className="or-parapraph"> or </div> <Link variant="dark" className="login-registration-button" to="/registration">Create an Account</Link></div></>}   
      </Navbar>
      <Navbar className="NavBar">
           {/* 
            <SearchBar placeholder="Try enter: Shoes" /> */ }
            <Text> <GavelIcon className="logoIcon"/> </Text>
            <div className="logo">AUCTION</div>
          <Nav>
            <Link to="/" className="navLink">HOME</Link>
          </Nav>
      </Navbar>
      </>
  );
}

export default withRouter(Header);
