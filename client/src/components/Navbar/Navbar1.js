import logo from "../../logo.svg";
import React from "react";
import { Nav, Navbar, InputGroup, FormControl, NavDropdown } from "react-bootstrap";


export default function Navbar1() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    {<img src={logo} height="40px" />}
                    COSC484 Movie App
                </Navbar.Brand>
                {/* do something with eventKey */}
                
                <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="#/home">
                            Home
                        </Nav.Link>
                    </Nav.Item>

                    <NavDropdown title="Movies" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Comedy</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Documentary</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Drama</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.5">Fiction</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.6">Horror</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Tv Shows" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Comedy</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Documentary</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Drama</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.5">Fiction</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.6">Horror</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            
                    </NavDropdown>
                    
                </Nav>
                <Nav className="ms-auto">

                </Nav>
                <Nav className="ms-auto">
                    <InputGroup size="sm">
                        <FormControl
                            aria-label="Search"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                    </InputGroup>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="">My Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Link href="">Sign up</Nav.Link>
                    <Nav.Link href="">Log in</Nav.Link>
                </Nav>
            </Navbar>

        </div>
    );
}