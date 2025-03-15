// deps
import React, { useEffect, useState } from "react";

// styles
import './MoreProfiles.css';

// components
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CircleIcon from '@mui/icons-material/Circle';

// constants
import { MORE_PROFILES } from "../../../constants/texts/Profile/moreProfiles";

// apis
import { fetchRecommendedProfiles } from "../../../utils/apis/profile";

function MoreProfiles() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchRecommendedProfiles().then(data => setProfiles(data));
    }, [])

    return (
        <div className="moreProfilesContainer">
            <div className="moreProfilesHeader">
                <p>{MORE_PROFILES.HEADER}</p>
            </div>
            <div className="moreProfiles">
                {profiles.map((profile, index) => (
                    <div className="recProfileContainer" key={index}>
                        <div className="recProfile">
                            <div className="recProfileImg">
                                <img src={profile.image} />
                            </div>
                            <div className="recProfileRight">
                                <div className="recProfileTitle">
                                    <p className="recProfileName">{profile.name}</p>
                                    <CircleIcon style={{ height: '2px', width: '2px', color: '#00000099', margin: '0 4px' }} />
                                    <p className="recProfileDegree">{profile.degree}</p>
                                </div>
                                <div className="recProfileBio">
                                    {profile.bio.length > 50 && window.innerWidth > 770 ? profile.bio.slice(0, 50) + '...' : profile.bio}
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