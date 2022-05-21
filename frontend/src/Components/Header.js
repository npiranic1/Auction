import logo from 'logo.svg';
import 'App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

function Header() {
  return (
    <>
      <Navbar className="NavBarDark" fixed="top" bg="dark" variant="dark">
        <Nav.Link href="https://www.facebook.com/">
          <FacebookIcon/>
        </Nav.Link>
        <Nav.Link href="https://www.instagram.com/">
          <InstagramIcon/>
        </Nav.Link>
        <Nav.Link href="https://twitter.com/">
          <TwitterIcon/>
        </Nav.Link>
        <Nav.Link href="https://www.google.com/">
          <GoogleIcon />
        </Nav.Link>
      </Navbar>
      <Navbar className="NavBar">
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px"/>{' '}
            <text color="grey" className="logo">AUCTION</text>
          </Navbar.Brand>
          {/* <SearchBar placeholder="Try enter: Shoes" /> */}

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
