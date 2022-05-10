import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './components/Navbar1'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)