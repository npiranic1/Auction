import "App.css";
import { Nav, Navbar } from "react-bootstrap";
import "components/css/Header.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import GavelIcon from "@mui/icons-material/Gavel";
import Text from "react-text";
import { Link, withRouter } from "react-router-dom";
import { clearSession } from "utility/storageService.js";
import SearchBar from "./SearchBar";

function Header({ isLoggedIn, setIsLoggedIn }) {
  function handleLogout() {
    clearSession();
    setIsLoggedIn(false);
  }

  return (
    <>
      <Navbar className="NavBarDark" fixed="top" bg="dark" variant="dark">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: "140px",
              width: "100%",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Nav.Link
              href="https://www.facebook.com/"
              style={{ padding: 0, width: "100%" }}
            >
              <FacebookIcon className="navBarIcon" />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/"
              style={{ padding: 0, width: "100%" }}
            >
              <InstagramIcon className="navBarIcon" />
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/"
              style={{ padding: 0, width: "100%" }}
            >
              <TwitterIcon className="navBarIcon" />
            </Nav.Link>
            <Nav.Link
              href="https://www.google.com/"
              style={{ padding: 0, width: "100%" }}
            >
              <GoogleIcon className="navBarIcon" />
            </Nav.Link>
          </div>

          {isLoggedIn ? (
            <Link
              variant="dark"
              className="logout-button"
              to="/"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <>
              <div className="login-registration-buttons-wrapper">
                <Link
                  variant="dark"
                  className="login-registration-button"
                  to="/login"
                >
                  Login
                </Link>
                <div className="or-parapraph"> or </div>{" "}
                <Link
                  variant="dark"
                  className="login-registration-button"
                  to="/registration"
                >
                  Create an Account
                </Link>
              </div>
            </>
          )}
        </div>
      </Navbar>
      <Navbar className="NavBar">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "80%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text>
              <GavelIcon className="logoIcon" />
            </Text>
            <div className="logo">AUCTION</div>
          </div>
          <SearchBar placeholder="Try enter: Shoes" />

          <Nav>
            <Link to="/" className="navLink">
              HOME
            </Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default withRouter(Header);
