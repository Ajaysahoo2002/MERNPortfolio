import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

const AdminContacts = () => {
    const [users, setUsers] = useState([]);
    const { bearerToken, server_api } = useAuth();
    const getAllUsersContactInfo = async () => {
        try {
            const res = await fetch(`${server_api}/admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: bearerToken
                }
            })
            const userData = await res.json();
            // console.log(userData);
            setUsers(userData);
        } catch (error) {
            console.log(error);
        }
    }

    // delete deleteUserContactsById code
    const deleteUserContactsById = async (id) => {
        try {
            const res = await fetch(`${server_api}/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: bearerToken
                }
            })
            if (res.ok) {
                toast.success("User Deleted Successfully!");
                getAllUsersContactInfo();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersContactInfo();
    }, []);
    return (
        <div className='adminContactsPage'>
            <h2>Admin Users Contact Data :</h2>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.message}</td>
                                        <td><button onClick={() => { deleteUserContactsById(user._id) }}>Delete</button></td>
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

export default AdminContacts
