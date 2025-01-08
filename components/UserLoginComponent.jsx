import React, { useState } from 'react'
import { verifyUser } from '../services/UserService' 


const UserLoginComponent = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const adminName = 'admin';
  const adminPassword = '111';
  const testName = 'test';
  const testPassword = '222';
  const trekAdminName = 'trek';
  const trekAdminPassword = '333';

  const verifyUserDetails = async (e) => {
    e.preventDefault();

    if (adminName === name && adminPassword === password) {
        // Redirects if correct
        window.location.href = 'http://localhost:8082/getAllAccounts'; 
      }

      if (testName === name && testPassword === password) {
        
        window.location.href = 'http://localhost:8082/getAllMountains';
      }

      if (trekAdminName === name && trekAdminPassword === password) {
        
        window.location.href = 'http://localhost:8082/trekadmin-microservice';
      }

    setError('');
    

    try {
      // Call verifyUser to authenticate
      const response = await verifyUser(name, password);

      if (response.data === 200) {
        console.log('Login successful!', response.data);
        window.location.href = 'http://localhost:8082/trek-microservice/1';
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } 
  }

  return (
    <div className="container">
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Login</h2>
                <div className='card-body'>
                    <form onSubmit={verifyUserDetails}>
                        <div className='form-group mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="name"
                            placeholder='Enter User Name'
                            name='name'
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        </div>
                        <div className='form-group mb-2'>
                        <label className='form-label'>Password:</label>
                       
                        <input
                            type="password"
                            placeholder='Enter User Password'
                            name='password'
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <div>
                        <button className='btn btn-primary mb-2' style={{marginLeft: '10px'}} type="submit">
                            Login
                        </button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    </div>
  )
}

export default UserLoginComponent;