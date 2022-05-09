import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import Navbar1 from './Navbar/Navbar1'
import UserProfileCSS from './UserProfile.css'

export default function UserProfile() {
  return (
    <>
      <Navbar1 />
        <div className='row'>
          
            <div className='col'>
              <div className='d-flex flex-column align-items-center text-center'>
                <div class="mt-3">
                  <h1>PICTURE</h1>
                  <img src=" ">a</img>
                  <h4>First Last</h4>
                  <p class="text-secondary mb-1">Favorite movie: </p>
                </div>
              </div>

            </div>
          
            <div className='col'>
              <div className='card-body'>
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="text-center">Profile Settings</h4>
                </div>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="FirstLast"
                  /* value={name}
                  onChange={(e) => setName(e.target.value)} */
                  ></Form.Control>
                </Form.Group>

                <hr />

                <Form.Group controlId="sex">
                  <Form.Label>Sex</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="sex"
                  /* value={sex}
                  onChange={(e) => setName(e.target.value)} */
                  ></Form.Control>
                </Form.Group>

                <hr />

                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                  /*  value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                  ></Form.Control>
                </Form.Group>

                <hr />

                <Form.Group controlId="pNo">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type=""
                    placeholder="Enter Phone Number"
                  /*   value={email}
                   onChange={(e) => setEmail(e.target.value)} */
                  ></Form.Control>
                </Form.Group>

                <hr />

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                  /*  value={password}
                  onChange={(e) => setPassword(e.target.value)} */
                  ></Form.Control>
                </Form.Group>

                <hr />

                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  /* value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} */
                  ></Form.Control>
                </Form.Group>


              </div>
            </div>
          

            <div className='col'>
              <div className='thumbnails'>
                <p>Upcoming Movies:</p>

              </div>
            </div>
          
        </div>
      


    </>



  )


}