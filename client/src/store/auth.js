import { React, createContext, useContext, useEffect, useState } from 'react'

// create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // eslint-disable-next-line
    const [token, setToken] = useState(localStorage.getItem("token"));
    const bearerToken = `Bearer ${token}`;

    // define the storeTokenInLS
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }

    let isLogedIn = !!token;
    // console.log(isLogedIn);

    // takeling the logout functionality
    // eslint-disable-next-line
    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem("token")
    }


    //backend server port 
    const server_api = "http://localhost:5000";

    const [user, setUser] = useState();
    // AUTHENTICATION FOR ABOUT PAGE AND OTHER to teg the user data
    const userAuthentication = async () => {
        try {
            const res = await fetch(`${server_api}/api/user`, {
                method: "GET",
                headers: {
                    Authorization: bearerToken
                }
            })
            if (res.ok) {
                const userData = await res.json();
                setUser(userData.user_data);
                // console.log(userData.user_data);
            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        userAuthentication();
    }, []);


    return (
        <>
            <AuthContext.Provider value={{ isLogedIn, storeTokenInLS, LogoutUser, user, token, bearerToken, server_api }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}


// create a custom hook
export const useAuth = () => {
    // get the token from the context
    return useContext(AuthContext);
}