import React from "react";
import './MoreProfiles.css';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CircleIcon from '@mui/icons-material/Circle';

function MoreProfiles() {
    const profiles = [
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699309825094?e=1740614400&v=beta&t=mZFI7qaZgbNl4g8ilVpeQX5YXM3bTesolnDTaZlLdRA',
            name: 'Sophia Johnson',
            degree: '1st',
            bio: 'Marketing Manager | Digital Marketing Specialist | MBA Graduate',
            connected: true
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699309825094?e=1740614400&v=beta&t=mZFI7qaZgbNl4g8ilVpeQX5YXM3bTesolnDTaZlLdRA',
            name: 'James Carter',
            degree: '2nd',
            bio: 'Full Stack Developer | React, Node.js, and MongoDB Expert',
            connected: false
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699309825094?e=1740614400&v=beta&t=mZFI7qaZgbNl4g8ilVpeQX5YXM3bTesolnDTaZlLdRA',
            name: 'Emily Brown',
            degree: '3rd',
            bio: 'UI/UX Designer | Advocate for Accessibility in Design',
            connected: false
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699309825094?e=1740614400&v=beta&t=mZFI7qaZgbNl4g8ilVpeQX5YXM3bTesolnDTaZlLdRA',
            name: 'Michael Lee',
            degree: '1st',
            bio: 'Data Scientist | Python & Machine Learning Specialist',
            connected: true
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699309825094?e=1740614400&v=beta&t=mZFI7qaZgbNl4g8ilVpeQX5YXM3bTesolnDTaZlLdRA',
            name: 'Rachel Taylor',
            degree: '2nd',
            bio: 'HR Manager | Expert in Talent Acquisition and Employee Engagement',
            connected: true
        }
    ];

    return (
        <div className="moreProfilesContainer">
            <div className="moreProfilesHeader">
                <p>More profiles for you</p>
            </div>
            <div className="moreProfiles">
                {profiles.map((profile, index) => (
                    <div className="">
                        <div>
                            <img src={profile.img} />
                        </div>
                        <div>
                            <div>
                                <p>{profile.name}</p>
                                <CircleIcon />
                                <p>{profile.degree}</p>
                            </div>
                            <div>
                                {profile.bio}
                            </div>
                            <button>{profile.connected ? 'View profile' : <span><PersonAddAlt1Icon /><span>Connect</span></span>}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            </div>
        </div>
    )
}

export default MoreProfiles;