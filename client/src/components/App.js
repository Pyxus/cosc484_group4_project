import HomePage from './HomePage'
import React from 'react'
import Signup from './Signup'
import { Container, Row } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Login"
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import UserProfile from './UserProfile'
import Navbar1 from './Navbar1'


function App() {
    return (
         <Container className ="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>}/>
                            <Route path='/user-profile' element={<PrivateRoute><UserProfile/></PrivateRoute>}/>
                            <Route path='signup' element={<Signup/>}/>
                            <Route path='login' element={<Login/>}/>
                            <Route path='forgot-password' element={<ForgotPassword/>}/>
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
        </Container> 
    )
}

export default App