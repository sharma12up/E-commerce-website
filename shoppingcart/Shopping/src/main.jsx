import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Global from './Global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Global>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Global>
)
