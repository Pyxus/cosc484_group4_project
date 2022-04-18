import logo from '../logo.svg'
import React from 'react'
import { Nav, Navbar, InputGroup, FormControl } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div>
        <Navbar bg='dark' variant='dark' sticky='top'>
            <Navbar.Brand>
                <img src={logo} height='40px'/>
                COSC484 Movie App
            </Navbar.Brand>

            <Nav>
                <Nav.Link href=''>Menu Options (Place Holder)</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
                <InputGroup size="sm">
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                </InputGroup>
            </Nav>
            <Nav >
                <Nav.Link href=''>Sign up</Nav.Link>
                <Nav.Link href=''>Log in</Nav.Link>
            </Nav>
        </Navbar>

        <div style={{padding: '12px', height: '3000px'}}>
            {/*Content Area*/}
            Test Content
        </div>
    </div>
  )
}
