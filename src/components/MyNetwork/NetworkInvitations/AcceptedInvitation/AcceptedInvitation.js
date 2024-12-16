import React from "react";
import './AcceptedInvitation.css';

import CloseIcon from '@mui/icons-material/Close';

function AcceptedInvitation({ invite, acceptedInvites, setAcceptedInvites, acceptedInvite }) {
    function handleCloseAccept(removeInvite) {
        const updateAcceptedInvites = acceptedInvites.filter(acceptedInvite => acceptedInvite !== removeInvite);
        setAcceptedInvites(updateAcceptedInvites);
    }

    return (
        <div className="acceptedInvitationContainer">
            <div className="separator"></div>
            <div className="acceptedInvitation">
                <img src={invite.img} className="acceptedInviteImage" />
                <p>{invite.name} is now a connection. <strong>Message {invite.name}</strong></p>
                <button className="removeAcceptedInvite" onClick={() => handleCloseAccept(acceptedInvite)}><CloseIcon /></button>
            </div>
        </div>
    )
}

export default AcceptedInvitation;