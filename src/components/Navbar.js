import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="brand-container">
        <img
          src="https://dcc-essentiel.ckgroup.ph/schoollogo/schoollogo.png"
          alt="DCC Logo"
          height="40"
          className="logo-image"
        />
        <span className="brand-text">DAVAO CENTRAL COLLEGE</span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/programs">Programs</Nav.Link>
          <Nav.Link as={Link} to="/admission">Admission</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
