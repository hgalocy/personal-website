import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('The HTML entry point must contain an element with id="root".')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
