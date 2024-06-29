import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../store/auth';
import { toast } from "react-toastify";
const AdminUsers = () => {
    const [user, setUser] = useState([]);
    const { bearerToken, server_api } = useAuth()
    const getAllUsersData = async () => {
        try {
            const res = await fetch(`${server_api}/admin/users`, {
                method: "GET",
                headers: {
                    Authorization: bearerToken
                }
            });
            const usersData = await res.json();
            setUser(usersData);
            // console.log(usersData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllUsersData();
        // eslint-disable-next-line
    }, []);


    //code deleteUser function 
    const deleteUser = async (id) => {
        try {
            const res = await fetch(`${server_api}/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: bearerToken
                }
            });
            if (res.ok) {
                toast.success("User deleted successfully");
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='adminUsersPage'>
            <h2>Admin Users Data :</h2>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><Link to={`/admin/users/edit/${user._id}`}><button>Edit</button></Link></td>
                                        <td><button onClick={() => { deleteUser(user._id) }} style={{ backgroundColor: "red" }}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default AdminUsers
