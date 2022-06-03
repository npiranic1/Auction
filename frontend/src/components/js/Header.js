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


function Header() {
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
      </Navbar>
      <Navbar className="NavBar">
           {/* 
            <SearchBar placeholder="Try enter: Shoes" /> */ }
            
            <Text> <GavelIcon className="logoIcon"/> </Text>
            <text className="logo">AUCTION</text>
          <Nav>
            <Link to="/">HOME</Link>
          </Nav>
      </Navbar>
      </>
  );
}

export default withRouter(Header);
