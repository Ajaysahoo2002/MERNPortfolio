import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export default function Logout() {
    const { LogoutUser } = useAuth();
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);
    toast.info("you've successfully logged out...");
    return <Navigate to="/login" />
}
