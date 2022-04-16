import React from 'react'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Login"

function App() {
    return (
        <Container className ="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "400px"}}>
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path='signup' element={<Signup/>}/>
                            <Route path='login' element={<Login/>}/>
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </Container>
    )
}

export default App