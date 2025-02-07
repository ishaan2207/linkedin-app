// deps
import React, { createContext, useContext, useEffect, useState } from "react";

// authentication
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { provider } from "../firebase";

// apis
import createUser from "../utils/apis/user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const auth = getAuth();

    const handleLogin = () => {
        signInWithPopup(auth, provider).then(result => {
            const newUser = {
                name: result?.user?.displayName,
                image: result?.user?.photoURL,
                userId: result?.user?.uid,
            };
            setUser(newUser);
            setIsLoggedIn(true);
        }).catch(err => console.error('Error: ', err));
    }

    useEffect(() => {
        createUser(user);
    }, [user])

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, handleLogin }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    return useContext(UserContext);
}

export { UserProvider, useUser };