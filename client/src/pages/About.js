import "./about.css";
import { useAuth } from "../store/auth";
const About = () => {
  const { user } = useAuth();
  return (
    <div className='aboutPage'>
      <div className="topSection">
        <div className="leftSection">
          <p>Welcome <span style={{ color: "green", textTransform: "uppercase" }}>{user ? user.username : "to our Website"}</span></p><br />
          <h1>Why Choose <span style={{ color: "green" }}>Us?</span></h1><br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam est, eum harum aliquam ex explicabo quae, maiores repellat, sit optio autem suscipit! Magni.</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam est, eum harum aliquam ex explicabo quae.</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam est, eum harum aliquam ex explicabo quae, maiores repellat, sit optio autem suscipit! Magni.</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam est, eum harum aliquam ex explicabo quae, maiores repellat.</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam est, eum harum aliquam ex explicabo quae, maiores repellat, sit optio autem suscipit! Magni. Lorem ipsum dolor sit amet.</p>
          <br />
          <div className="buttons">
            <button id='btn1'>Connect Now</button>
            <button id='btn2'>Learn More</button>
          </div>
        </div>
        <div className="rightSection">
          <img src="/images/register.avif" alt="not found!" />
        </div>
      </div>
    </div>
  )
}

export default About
