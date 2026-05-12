import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// Configure Axios base URL from environment variables
// If VITE_API_URL is set (e.g., http://18.206.180.123:8000), it uses it.
// Otherwise, it falls back to relative paths ('/api/...') which requires an Apache reverse proxy.
axios.defaults.baseURL = import.meta.env.VITE_API_URL || ''

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
