import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import './index.css'
import './work.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    'The HTML entry point must contain an element with id="root".',
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
