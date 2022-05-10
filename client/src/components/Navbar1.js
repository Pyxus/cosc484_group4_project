import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from '../contexts/AuthContext'
import { getAuth } from "firebase/auth";

export default function Navbar1() {
    const { currentUser, logout } = useAuth()

    console.log("TEST")
    console.log(useAuth)

    async function handleLogout(){

        try {
            await logout()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    COSC484 Movie App
                </Navbar.Brand>
                
                <Nav className="ms-auto">

                </Nav>
                <div>
                    {currentUser ?
                        <Nav>
                            <Nav.Link href="userprofile">My Account</Nav.Link>
                            <Nav.Link onclick={handleLogout()}>Logout</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link href="signup">Sign up</Nav.Link>
                            <Nav.Link href="login">Log in</Nav.Link>
                        </Nav>
                    }
                </div>
            </Navbar>

        </div>
    );
}