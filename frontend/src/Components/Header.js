import 'App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GavelIcon from '@mui/icons-material/Gavel';

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
           {/* <Navbar.Brand className="NavBar">
            
          </Navbar.Brand>
          {/* <SearchBar placeholder="Try enter: Shoes" /> */}
            <text> <GavelIcon className="logoIcon"/> </text>
            <text className="logo">AUCTION</text>
          <Nav>
            <Nav.Link to="/home">HOME</Nav.Link>
            {/* <Nav.Link href="shop">SHOP</Nav.Link>
            <Nav.Link href="myAccout">MY ACCOUNT</Nav.Link> */}
          </Nav>
      </Navbar>
    </>
  );
}

export default Header;
