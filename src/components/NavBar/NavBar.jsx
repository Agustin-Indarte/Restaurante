import './Navbar.css'
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Navbar expand="md" className='custom-Navbar fixed-top shadow-lg'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='navbar-brand'>
            <img src="LaLeñita_Logo.jpg" alt="Logo de La Leñita" className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100 fw-bold">
            <Nav.Link as={Link} to="/" className="text-uppercase">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-uppercase">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-uppercase">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-uppercase">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  )
}

export default NavBar