import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth';
import "./register.css";
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
  const [userData, setUserData] = useState(null);

  const { storeTokenInLS, server_api } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    const userData = { username, email, phone, password };
    try {
      const response = await fetch(`${server_api}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      console.log(response);
      if (response.ok) {
        const response_data = await response.json();
        // set token in local storage
        storeTokenInLS(response_data.token);
        setUsername("")
        setEmail("")
        setPhone("")
        setPassword("")
        toast.success("Registration Successful! Please Log In to Continue!");
        navigate('/login');
      }
      else {
        toast.info("user is already registered. Please SignIn!");
      }
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <div className='registerForm'>
      <div className='leftSection'>
        <img src="./images/register.avif" alt="not Found!!" />
      </div>
      <div className='rightSection'>
        <h1>Registeration <span style={{ color: "green", fontWeight: "bolder" }}>Form</span></h1>
        <form onSubmit={handleRegister} method='POST'>
          <div className="labels">
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Your Name' required />
          </div>
          <div className="labels">
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required />
          </div>
          <div className="labels">
            <label htmlFor='phone'>Phone:</label>
            <input type='phone' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Phone' required />
          </div>
          <div className="labels">
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
