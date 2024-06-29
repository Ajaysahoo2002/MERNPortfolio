import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import "./adminpanel.css"
const Admin = () => {
    return (
        <div className='adminPage'>
            <header>
                <nav>
                    <li><NavLink to="/admin/users">users</NavLink></li>
                    <li><NavLink to="/admin/contacts">contacts</NavLink></li>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default Admin;
