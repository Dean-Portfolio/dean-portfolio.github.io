import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './routes/index' // Points to your portfolio page component
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
