// deps
import React, { createContext, useContext, useEffect, useState } from "react";

// authentication
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { provider } from "../firebase";

// apis
import createUser from "../utils/apis/user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

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

    const handeLogout = async () => {
        try {
            await signOut(auth);
            setUser({});
        } catch (err) {
            console.error('Error in logging out: ', err);
        }
    };

    useEffect(() => {
        createUser(user);
    }, [user])

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, loading, setLoading, handleLogin, handeLogout }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    return useContext(UserContext);
}

export { UserProvider, useUser };