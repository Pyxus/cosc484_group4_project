import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import Navbar1 from './Navbar/Navbar1'

export default function UserProfile() {
    return (
        <>
            <Navbar1 />
            <div>
                <Row className="profileContainer">
                    <Col md={6}>
                    <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  /* type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} */
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  /*type="email"
                  placeholder="Enter Email"
                   value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  /*type="password"
                  placeholder="Enter Password"
                   value={password}
                  onChange={(e) => setPassword(e.target.value)} */
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  /* type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} */
                ></Form.Control>
              </Form.Group>{/* " "}
              {{picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )} */}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
             {/*    <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                /> */}
              </Form.Group>
                
                    </Col>
                    <Col
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img src=" " alt="" className="profilePic" />
                    </Col>
                </Row>
            </div>
        </>



    )


}