// src/components/Footer.jsx
import Container from 'react-bootstrap/Container';

function Footer() {
  // Pega o ano atual automaticamente (ex: 2025)
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="py-4 mt-auto">
      <Container className="text-center">
        <p className="mb-0">
          {anoAtual} &copy; Todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer;