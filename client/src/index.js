import React from 'react'
import ReadDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'

ReadDOM.render(
  <React.StrictMode>
    "<App />"
  </React.StrictMode>,
  document.getElementById('root')
)