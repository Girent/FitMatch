import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HeaderLand } from './header/HeaderLand'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HeaderLand />
    <App />
  </React.StrictMode>,
)
