import HomePage from './HomePage'
import React from 'react'

function App() {
    return (
         <Container className ="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "400px"}}>

                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path='/' element={<PrivateRoute><UserProfile/></PrivateRoute>}/>
                            <Route path='/update-profile' element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
                            <Route path='signup' element={<Signup/>}/>
                            <Route path='login' element={<Login/>}/>
                            <Route path='forgot-password' element={<ForgotPassword/>}/>
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </Container> 
    )
}

export default App