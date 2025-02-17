// deps
import React from "react";
import { useNavigate } from 'react-router-dom';

// styles
import './NavModal.css';

// contexts
import { useUser } from "../../../Context/UserContext";

function NavModal({ showModal, setShowModal }) {
    const { user, handleLogout } = useUser();

    const navigate = useNavigate();

    const handleNavigate = () => {
        setShowModal('none');
        navigate('/profile')
    }

    const handleClickSignOut = () => {
        setShowModal('none');
        handleLogout(navigate);
    }

    return (
        <div className="navModalContainer" style={{ display: showModal }}>
            <div className="navModalProfile">
                <div className="navModalProfileInfo">
                    <img src={user.image} alt='' />
                    <div className="navModalProfileText">
                        <p className="usersName">{user.name}</p>
                        <p className="usersBio">{user.bio ? user.bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
                    </div>
                </div>
                <button className="profileNavButton" onClick={handleNavigate}>View Profile</button>
            </div>
            <div className="separator"></div>
            <button className="signOutButton" onClick={handleClickSignOut}>Sign out</button>
        </div>
    )
}

export default NavModal;