import logo from '../logo.svg'
import React from 'react'
import { Nav, Navbar, InputGroup, FormControl } from 'react-bootstrap'
import Movies from './Movies'

export default function HomePage() {
  return (
        <div style={{padding: '0', height: '100vh'}}>
            {/*Content Area*/}
            <Movies/>
        </div>
    
  )
}
