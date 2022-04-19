import logo from "../logo.svg";
import React from "react";
import { Nav, Navbar, InputGroup, FormControl } from "react-bootstrap";

export default function HomePage() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    <img src={logo} height="40px" />
                    COSC484 Movie App
                </Navbar.Brand>

                <Nav>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        > Movies </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Comedy</button>
                            <button class="dropdown-item" type="button">Documentary </button>
                            <button class="dropdown-item" type="button"> Drama </button>
                            <button class="dropdown-item" type="button"> Fiction </button>
                            <button class="dropdown-item" type="button">Horror</button>
                        </div>
                    </div>
                </Nav>
                <Nav>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        > Tv Shows </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Comedy</button>
                            <button class="dropdown-item" type="button">Documentary </button>
                            <button class="dropdown-item" type="button"> Drama </button>
                            <button class="dropdown-item" type="button"> Fiction </button>
                            <button class="dropdown-item" type="button">Horror</button>
                        </div>
                    </div>
                </Nav>

                {/*   ///////////////////////////////////////////////////////////////////// */}
                {/* <Nav>
            <li className="dropdown"><a class="dropdown-toggle" 
                data-toggle="dropdown" href="#">Movies<span
                    ></span></a>
            <ul className=' ' class='hidden'>
                <li><a href=" ">Action</a></li>
                <li><a href=" ">Comedy</a></li>
                <li><a href=" ">Documentary</a></li>
                <li><a href=" ">Drama</a></li>
                <li><a href=" ">Fiction</a></li>
                <li><a href=" ">Horror</a></li>

            </ul>
        </li>

     
            </Nav> */}
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
                    <Nav.Link href="">Sign up</Nav.Link>
                    <Nav.Link href="">Log in</Nav.Link>
                </Nav>
            </Navbar>

            <div style={{ padding: "12px", height: "3000px" }}>
                {/*Content Area*/}
                Test Content. If someone from the group is viewing this I was working on
                the homework but most of the testing has been setup and done for App.js
            </div>
        </div>
    );
}
