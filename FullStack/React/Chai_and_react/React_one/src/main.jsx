import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paras from './myFile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Paras/>
  </StrictMode>,
)
