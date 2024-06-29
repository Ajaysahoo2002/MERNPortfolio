import React, { useState } from 'react'
import "./contact.css";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Contact = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const [userData, setUserData] = useState(true);
  const { user, server_api } = useAuth();
  if (user && userData) {
    setUsername(user.username);
    setEmail(user.email)
    setUserData(false);
  }

  // submit the contact form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${server_api}/api/form/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, message })
    })
    if (res.ok) {
      toast.success("thankyou for your response!");
      setMessage("");
    } else {
      toast.info("you have already sent a response");
      setMessage("");
    }
  }

  return (
    <div className="contactPageSection">
      <div className='contactPage'>
        <h1>Contact Us</h1>
        <div className="container">
          <div className="left">
            <img src="./images/register.avif" alt="Contact" />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit} method='POST'>
              <div className="labels">
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='name' autoComplete='off' required />
              </div>
              <div className="labels">
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' autoComplete='off' required />
              </div>
              <div className="labels">
                <label htmlFor='message'>Message:</label>
                <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='your message' required></textarea>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mapContainer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.3214760457786!2d84.98565297533776!3d22.34148717965708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ff75f78d4d093%3A0xba737da85ee0dbd1!2sBAGDEGA!5e0!3m2!1sen!2sin!4v1714805221618!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} title='sam' allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
