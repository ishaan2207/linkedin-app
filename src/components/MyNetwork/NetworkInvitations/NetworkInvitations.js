import React, { useState } from "react";
import './NetworkInvitations.css';
import AcceptedInvitation from './AcceptedInvitation/AcceptedInvitation';


function NetworkInvitations() {
    const invitesArray = [
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8',
            name: 'Shivam Mishra',
            bio: 'Frontend | React, Javascript, Angular | Leetcode 700+',
            mutuals: 'Harshit Kumar and 125 other mutual connections'
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8',
            name: 'Sudha Kumawat',
            bio: 'Maulana Azad national institute of technology Bhopal',
            mutuals: 'Ashish Bansal and 83 other mutual connections'
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8',
            name: 'Aryan Agarwal',
            bio: 'Computer Science graduate eager to design impactful web solutions. Always learning and ready to contribute to innovative teams.',
            mutuals: 'Nikita Rungta and 11 other mutual connections'
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8',
            name: 'Ishaan Gupta',
            bio: 'UBC Computer Science graduate with expertise in front-end development and user-focused design. Dedicated to building modern, accessible digital solutions.',
            mutuals: 'Adit Mitra and 23 other mutual connections'
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8',
            name: 'Rishabh Jain',
            bio: 'I create functional, beautiful websites with a passion for clean code and great design. Always excited to collaborate and innovate.',
            mutuals: 'Pranav Jain and 51 other mutual connections'
        }
    ]

    const [acceptedInvites, setAcceptedInvites] = useState([]);
    const [invites, setInvites] = useState(invitesArray)

    const handleAccept = (invite) => {
        setAcceptedInvites([...acceptedInvites, invite]);
        const updatedInvites = invites.filter(item => item !== invite);
        setInvites(updatedInvites);
    }

    return (
        <div className="networkInvitationsContainer">
            <div className="invitationsHeader">
                <div className="invitationsNumber">Invitations ({invites.length})</div>
                <div className="showAllInvites">Show all</div>
            </div>
            {acceptedInvites.length > 0 && (
                <div className="acceptedInvitesContainer">
                    {acceptedInvites.map(acceptedInvite => (
                        <AcceptedInvitation invite={acceptedInvite} acceptedInvites={acceptedInvites} acceptedInvite={acceptedInvite}
                            setAcceptedInvites={setAcceptedInvites} />
                    ))}
                </div>
            )}
            <div className="invitationsContainer">
                {invites.slice(0, 3).map((invite, index) => (
                    <div>
                        <div className="separator"></div>
                        <div className="networkInvite">
                            <div className="inviteUserInformationContainer">
                                <div className="inviteUserImage">
                                    <img src={invite.img} />
                                </div>
                                <div className="inviteUserInformation">
                                    <div className="inviteUsername"><strong>{invite.name}</strong> is inviting you to connect</div>
                                    <div className="inviteUserBio">{invite.bio.length < 60 ? invite.bio : (invite.bio.slice(0, 60) + ' ...')}</div>
                                    <div className="inviteMutualConnections">{invite.mutuals}</div>
                                </div>
                            </div>

                            <div className="inviteButtonGroup">
                                <button className="ignoreInviteButton">Ignore</button>
                                <button className="acceptInviteButton" onClick={() => handleAccept(invite)}>Accept</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NetworkInvitations;