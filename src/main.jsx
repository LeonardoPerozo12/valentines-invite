import './index.css'
import { StrictMode } from 'react'
import { Router } from './Router.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
