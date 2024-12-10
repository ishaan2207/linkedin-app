import React, { createContext, useContext, useState } from 'react';

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
    const [numLikes, setNumLikes] = useState(22);
    const [likeUsername, setLikeUsername] = useState('Raunak Khanna');

    function updateLikeUsername(newName) {
        setLikeUsername(newName);
    }

    function updateNumLikes(newNum) {
        setNumLikes(newNum);
    }

    return (
        <LikesContext.Provider value={{ numLikes, updateNumLikes, likeUsername, updateLikeUsername }}>
            {children}
        </LikesContext.Provider>
    )
}

const useLikes = () => {
    return useContext(LikesContext);
}

export { LikesProvider, useLikes };