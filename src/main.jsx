import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <Footer />
  </StrictMode>,
)

