import React,{useState, useEffect}from 'react'
import { Form, Button, Row, Col, Modal} from "react-bootstrap";
import Navbar1 from './Navbar/Navbar1'
import UserProfileCSS from './UserProfile.css'
import { doc , getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import db from "../firebase";

 

export default function UserProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [userData, setUserData] = useState()
  useEffect(() => {
    async function fetchData() {
      try{
          const docRef = doc(db, "users", "l5gvNJamInhndFcYFLktDDump9e2")
          const docSnap = await getDoc(docRef)
          setUserData(docSnap.data())
      } catch (e){
          console.error(e)
      }
    }
    fetchData();
  }, [userData])
  console.log(userData);
  return (
    <>
      {/* <Navbar1 /> */}
      <div className='row'>
        {/* PP and Name tab */}
        <div className='col'>
          <div className='d-flex flex-column align-items-center text-center'>
            <div class="mt-3">
              <h1>PICTURE</h1>
              <h4>First Last</h4>
              <p class="text-secondary mb-1">Favorite movie:</p>
            </div>
          </div>

        </div>
        {/* ProfileSetting Tab */}
        <div className='col'>
          <div className='card-body'>
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="text-center">Profile Settings</h4>
            </div>
            <Form>
              <Form.Group controlId="userName">
                <Form.Label>User Name
                  <Form.Control plaintext readOnly defaultValue=""></Form.Control>
                </Form.Label>
              </Form.Group>

              <hr />

              <Form.Group controlId="sex">
                <Form.Label>Sex</Form.Label>
                <Form.Control plaintext readOnly defaultValue="currUSER SEX" />
              </Form.Group>

              <hr />

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control plaintext readOnly defaultValue="currUSER email Address" />
              </Form.Group>

              <hr />

              <Form.Group controlId="pNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control plaintext readOnly defaultValue="currUSER Phone Number" />
              </Form.Group>

              <hr />

              {/* <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                 value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <hr />

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group> */}
              
              <button type='button' /* onClick={this.openModal} */>Edit</button>
{/* 
              <Modal show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
 */}
            </Form>


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