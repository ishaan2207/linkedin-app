// deps
import React from "react";

// styles
import './MoreProfiles.css';

// components
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CircleIcon from '@mui/icons-material/Circle';

// constants
import { MORE_PROFILES } from "../../../constants/texts/Profile/moreProfiles";

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
                <p>{MORE_PROFILES.HEADER}</p>
            </div>
            <div className="moreProfiles">
                {profiles.map((profile, index) => (
                    <div className="recProfileContainer">
                        <div className="recProfile">
                            <div className="recProfileImg">
                                <img src={profile.img} />
                            </div>
                            <div className="recProfileRight">
                                <div className="recProfileTitle">
                                    <p className="recProfileName">{profile.name}</p>
                                    <CircleIcon style={{ height: '2px', width: '2px', color: '#00000099', margin: '0 4px' }} />
                                    <p className="recProfileDegree">{profile.degree}</p>
                                </div>
                                <div className="recProfileBio">
                                    {profile.bio.length > 50 ? profile.bio.slice(0, 50) + '...' : profile.bio}
                                </div>
                                <div className="recProfileButton">
                                    <button>{profile.connected ? <span>{MORE_PROFILES.VIEW}</span> : <span className="profileConnectButton"><PersonAddAlt1Icon style={{ height: '18px', width: '18px' }} /><span>Connect</span></span>}</button>
                                </div>
                            </div>
                        </div>
                        {index !== profiles.length - 1 ? <div className="separator"></div> : ''}
                    </div>
                ))}
            </div>
            <div className="moreProfilesShowAllContainer">
                <div className="moreProfilesShowAll">
                    <div className="separator"></div>
                    <div className="showAllButton">
                        <span>{MORE_PROFILES.SHOW_ALL}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MoreProfiles;