import './TopNav.css';
import logo from '../../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function TopNav() {
  return (
    <div className="top-nav">
      <Navbar className="top-navbar-main" bg="light" expand="lg">
        <Navbar.Brand className="top-navbar-brand" href="#">
          <img
            src={logo}
            width="40"
            height="40"
          />
        </Navbar.Brand>
        <div className="top-navbar-link-container">
          {/* <Nav.Link className="top-navbar-link" href="#">About</Nav.Link> */}
          {/* <Nav.Link className="top-navbar-link" href="#">Blog</Nav.Link> */}
        </div>
      </Navbar>
    </div>
  );
}

export default TopNav;

