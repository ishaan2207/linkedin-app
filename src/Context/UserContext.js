// deps
import React, { createContext, useContext, useEffect, useState } from "react";

// authentication
import { getAuth, signInWithPopup, setPersistence, browserLocalPersistence, signOut, onAuthStateChanged } from 'firebase/auth';
import { provider } from "../firebase";

// apis
import createUser from "../utils/apis/user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const auth = getAuth();

    useEffect(() => {
        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                    if (currentUser) {
                        const loggedInUser = {
                            name: currentUser.displayName,
                            image: currentUser.photoURL,
                            userId: currentUser.uid,
                        };
                        setUser(loggedInUser);
                        setIsLoggedIn(true);
                    } else {
                        setUser({});
                        setIsLoggedIn(false);
                    }
                });
                return () => unsubscribe();
            })
            .catch(err => console.error('Error setting persistence: ', err));
    }, [auth])

    const handleLogin = async (navigate) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const newUser = {
                name: result?.user?.displayName,
                image: result?.user?.photoURL,
                userId: result?.user?.uid,
            };
            setUser(newUser);
            createUser(newUser);
            setIsLoggedIn(true);
            navigate('/');
        } catch (err) {
            console.error('Error in logging in: ', err);
        }
    };

    const handleLogout = async (navigate) => {
        try {
            await signOut(auth);
            setUser({});
            setIsLoggedIn(false);
            console.log('logged in', isLoggedIn);
            // navigate('/login');
        } catch (err) {
            console.error('Error in logging out: ', err);
        }
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    return useContext(UserContext);
}

export { UserProvider, useUser };