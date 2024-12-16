import React from "react";
import './NetworkInvitations.css';

function NetworkInvitations() {
    return (
        <div className="networkInvitationsContainer">
            <div className="noPendingInvitations">
                No pending invitations
            </div>
            <div className="manageNetworkInvitations">
                Manage
            </div>
        </div>
    )
}

export default NetworkInvitations;