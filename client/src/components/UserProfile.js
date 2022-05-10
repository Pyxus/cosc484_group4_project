import React,{useState, useEffect}from 'react'
import { Form, Button, Row, Col, Modal} from "react-bootstrap";
import UserProfileCSS from './UserProfile.css'
import { doc , getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
 

export default function UserProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null)
  const db = getFirestore()
  //
  const fetchData= async() =>{
    try{
      if (!userData)
      {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        setUserData(docSnap.data())
        console.log("1")
      }
      console.log("fetching user data")
    } catch (e){
        console.error(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  
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
            {userData ? 
            
                        <Form>
              <Form.Group controlId="userName">
                <Form.Label>User Name
                  <Form.Control plaintext readOnly defaultValue={userData.name}></Form.Control>
                  {/* <Form.Control plaintext readOnly defaultValue={userData.name}></Form.Control> */}
                </Form.Label>
              </Form.Group>

              <hr />

              <Form.Group controlId="sex">
                <Form.Label>Sex</Form.Label>
                <Form.Control plaintext readOnly defaultValue={userData.sex} />
              </Form.Group>

              <hr />

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control plaintext readOnly defaultValue={user.email} />
              </Form.Group>

              <hr />

              <Form.Group controlId="pNo">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control plaintext readOnly defaultValue={userData.phone} />
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
              
              <button type='button' onClick={()=>{navigate("/update-profile")}}>Edit</button>
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
            : 
            
            <></>}



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