import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <div>
        <div className='width-100 text-white p-3 text-center' style={{
    backgroundColor: "#48D1CC",
    }} >COMPROVANTE DE INSCRIÇÃO E DE SITUAÇÃO CADASTRAL</div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img src="/logo_marca_semfundo.png" alt="Logo" height="100" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://github.com/dryeniio/projeto-site-cnpj">
                Repositório
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}