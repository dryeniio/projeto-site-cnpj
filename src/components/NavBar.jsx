import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src="/logo_marca_semfundo.png" alt="Logo" height="100" />
                    {/* <div className='mb-0 ms-3 h1'>Consulta CNPJ</div> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://github.com/dryeniio/projeto-site-cnpj">Repositório</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}