import React from "react";
import './ProfileSummary.css'
import AddIcon from '@mui/icons-material/Add';


function ProfileSummary() {
    const username = 'Ishaan Gupta';
    const about = 'Recent graduate from The University of British Columbia';
    const location = 'Gurugram, Haryana';
    const image = 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1738800000&v=beta&t=GMjdzIp5w0bjGYgLxVA3xmmgdlHNjsN00N224VioXm8'

    return (
        <div className="profileSummaryContainer">
            <img className="userImage" src={image} />
            <p id="username">{username}</p>
            <p id="about">{about}</p>
            <p id="location">{location}</p>
            <button>
                <AddIcon style={{ paddingRight: '3px', height: '22px', width: '22px' }} />
                Experience
            </button>
        </div>
    )
}

export default ProfileSummary;
