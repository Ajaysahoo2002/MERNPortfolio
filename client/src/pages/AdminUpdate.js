import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from '../store/auth'
import { toast } from "react-toastify"
const AdminUpdate = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("");
    const [data, setData] = useState([]);


    const { bearerToken, server_api } = useAuth()
    const params = useParams();




    // get signle users Data
    const getSingleUsersData = async () => {
        try {
            const res = await fetch(`${server_api}/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: bearerToken
                }
            });
            const usersData = await res.json();
            setData(usersData);
            if (data && usersData) {
                setUsername(usersData.username);
                setEmail(usersData.email);
                setPhone(usersData.phone);
            }
        } catch (error) {
            console.log(error);
        }
    }


    // submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${server_api}/admin/users/edit/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: bearerToken
                },
                body: JSON.stringify({ username, email, phone })
            })
            // console.log(res);
            if (res.ok) {
                toast.success("User Updated Successfully!");
                navigate("/admin/users");
            } else {
                toast.error("Not Updated!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUsersData();
    }, [])

    return (
        <div className='updatePage'>
            <div className="updatePage_container">
                <h2>Update User Data</h2>
                <div className="right">
                    <form onSubmit={handleSubmit} method='PATCH'>
                        <div className="labels">
                            <label htmlFor='username'>Username:</label>
                            <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='name' autoComplete='off' required />
                        </div>
                        <div className="labels">
                            <label htmlFor='email'>Email:</label>
                            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' autoComplete='off' required />
                        </div>
                        <div className="labels">
                            <label htmlFor='phone'>Phone:</label>
                            <input type='phone' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone' autoComplete='off' required />
                        </div>
                        <button type='submit'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminUpdate
