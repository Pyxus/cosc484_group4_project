import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage'
import UserProfile from './components/UserProfile'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Navbar1 from './components/Navbar/Navbar1'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Navbar1 />
    <App/>
  </React.StrictMode>,
)