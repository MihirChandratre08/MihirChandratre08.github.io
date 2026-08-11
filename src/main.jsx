import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResearchModeProvider } from './context/ResearchModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResearchModeProvider>
      <App />
    </ResearchModeProvider>
  </StrictMode>,
)
