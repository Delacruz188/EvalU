import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import { ThemeProvider } from '@material-tailwind/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <NavbarComponent />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
