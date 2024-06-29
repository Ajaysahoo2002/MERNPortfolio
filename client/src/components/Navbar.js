import "./navbar.css";
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth';
const Navbar = () => {
    const { isLogedIn } = useAuth();
    return (
        <div className='nav_container'>
            <NavLink to="/">Ajay Sahoo</NavLink>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {
                    isLogedIn ?
                        <NavLink to="/logout">Logout</NavLink>
                        : <>
                            <NavLink to="/register">Signup</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                }
            </div>
        </div>
    )
}

export default Navbar
