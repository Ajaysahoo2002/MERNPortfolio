import React from 'react'
import "./error.css"
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div className='errorPage'>
            <div class="container">
                <h1>404</h1>
                <h2>Sorry! Page not found</h2>
                <p>Oops! It seems like the page you're trying to access doesn't exist. If you believe there's am issue, feel free to report it, and we'll look into it.</p>
                <div className="btns">
                    <NavLink to="/"><button>Go back home</button></NavLink>
                    <NavLink to="/contact"><button>Report Problem</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error;
