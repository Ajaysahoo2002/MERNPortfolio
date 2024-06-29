import React from 'react'
import { NavLink } from 'react-router-dom'
import "./home.css"
const Home = () => {
  return (
    <div className='homeSection'>
      {/* top section of hero */}
      <div className="topSection">
        <div className="leftSection">
          <p>We are the best IT Company</p><br />
          <h1>Welcome to our<span style={{ color: "green" }}> Website</span></h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda deleniti incidunt quas illo nam accusantium voluptas fugiat voluptatum voluptates! Atque similique est saepe corporis et magnam quam! Enim, consequatur!</p><br />
          <div className="buttons">
            <button id='btn1'><NavLink to="/about">Connect Now</NavLink></button>
            <button id='btn2'>Learn More</button>
          </div>
        </div>
        <div className="rightSection">
          <img src="/images/register.avif" alt="not found!" />
        </div>
      </div>

      {/* middle section of hero */}
      <div className="middleSection">
        <div className="middleSectionContainer">
          <div className="boxes">
            <h2>50+</h2>
            <p>Registered Company</p>
          </div>
          <div className="boxes">
            <h2>100.00+</h2>
            <p>happy Clients</p>
          </div>
          <div className="boxes">
            <h2>500+</h2>
            <p>Well known Developers</p>
          </div>
          <div className="boxes">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </div>

      {/* bottom section of hero */}
      <div className="bottomSection">
        <div className="bottomLeftSection">
          <img src="/images/register.avif" alt="not found!" />
        </div>
        <div className="bottomRightSection">
          <p>We are here to help you</p><br />
          <h1>Get Started <span style={{ color: "green" }}>Today</span></h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda deleniti incidunt quas illo nam accusantium voluptas fugiat voluptatum voluptates! Atque similique est saepe corporis et magnam quam! Enim, consequatur!</p><br />
          <div className="buttons">
            <button id='btn1'><NavLink to="/about">Connect Now</NavLink></button>
            <button id='btn2'>Learn More</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
