import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import "./login.css"
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [loginData, setLoginData] = useState(null);

  const { storeTokenInLS, server_api } = useAuth();

  // login functionality
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log(loginData);
    try {
      let res = await fetch(`${server_api}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      // console.log(res);
      if (res.ok) {
        let res_data = await res.json();
        storeTokenInLS(res_data.token);
        setEmail("");
        setPassword("");
        toast.success("You've successfully loggedIn!");
        navigate("/about")
      }
      else {
        toast.error("Invalid Credentials!");
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className='loginForm'>
      <img src="./images/loginbackImage.avif" alt="Not Found!" />
      <div className='loginContainer'>
        <h1>Login <span style={{ color: "green", fontWeight: "bolder" }}>Form</span></h1>
        <form onSubmit={handleLogin} method='POST'>
          <div className="labels">
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
          </div>
          <div className="labels">
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          </div>
          <div className="labels links">
            <p>Forgot Password ?</p>
          </div>
          <button type='submit'>Signin</button>
          <div className="labels links">
            <p>Dont't have an account ? <span><a href="/register">Signup now</a></span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
