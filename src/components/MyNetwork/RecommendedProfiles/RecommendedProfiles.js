// deps
import React, { useEffect, useState } from "react";

// styles
import './RecommendedProfiles.css';

// components
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// apis
import { fetchNetworkProfiles } from "../../../utils/apis/networks";

function RecommendedProfiles() {
    // const allProfiles = [
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Alice Johnson',
    //         bio: 'Experienced software developer with a passion for creating scalable applications.',
    //         mutuals: 'Emily Davis',
    //         numConnections: 37,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D4D16AQEcYKac_Zcrww/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1716388453884?e=2147483647&v=beta&t=C2Qu-Ts1IwaGiNEpDbb6kiF5Gf3bDK9ykqlu81L8kwY'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Bob Smith',
    //         bio: 'Marketing professional with 10 years of experience in digital strategies.',
    //         mutuals: 'James Thompson',
    //         numConnections: 30,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D5616AQE_2hZZYX0JLw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1675380272091?e=2147483647&v=beta&t=WwpB8qb_DkRDLkrtFtn72Uwd-V4Wb30FcyY8DEWiJR0'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Charlie Brown',
    //         bio: 'Financial analyst with a strong background in equity research.',
    //         mutuals: 'Liam Johnson',
    //         numConnections: 14,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D5616AQE_2hZZYX0JLw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1675380272091?e=2147483647&v=beta&t=WwpB8qb_DkRDLkrtFtn72Uwd-V4Wb30FcyY8DEWiJR0'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Diana Prince',
    //         bio: 'DevOps engineer focused on improving CI/CD pipelines and cloud deployments.',
    //         mutuals: 'Olivia Wilson',
    //         numConnections: 31,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D4D16AQEcYKac_Zcrww/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1716388453884?e=2147483647&v=beta&t=C2Qu-Ts1IwaGiNEpDbb6kiF5Gf3bDK9ykqlu81L8kwY'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Eve Adams',
    //         bio: 'Experienced software developer with a passion for creating scalable applications.',
    //         mutuals: 'Sophia Martinez',
    //         numConnections: 41,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D5616AQE_2hZZYX0JLw/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1675380272091?e=2147483647&v=beta&t=WwpB8qb_DkRDLkrtFtn72Uwd-V4Wb30FcyY8DEWiJR0'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Frank Wright',
    //         bio: 'HR specialist passionate about fostering workplace inclusion and growth.',
    //         mutuals: 'Mason Miller',
    //         numConnections: 45,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D5616AQGOyesCIHxUrA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1733361467984?e=2147483647&v=beta&t=cOIWYVnaFIE79M-RbQioztQnOc1QQYAzGQVlnRJLIiw'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Grace Hopper',
    //         bio: 'Experienced software developer with a passion for creating scalable applications.',
    //         mutuals: 'Harper Lee',
    //         numConnections: 41,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D5616AQF-4CbE03Iqqg/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1698778663345?e=2147483647&v=beta&t=wQB67Ui8V54KaBR4gCCLn1-yuK63rhVUPnC96TOMOX4'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Henry Ford',
    //         bio: 'HR specialist passionate about fostering workplace inclusion and growth.',
    //         mutuals: 'Jack Wilson',
    //         numConnections: 31,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D4D16AQEcYKac_Zcrww/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1716388453884?e=2147483647&v=beta&t=C2Qu-Ts1IwaGiNEpDbb6kiF5Gf3bDK9ykqlu81L8kwY'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Robert Dylan',
    //         bio: 'Third year Computer Science major at The University of British Columbia',
    //         mutuals: 'Alex Steinfeld',
    //         numConnections: 23,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D5616AQF-4CbE03Iqqg/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1698778663345?e=2147483647&v=beta&t=wQB67Ui8V54KaBR4gCCLn1-yuK63rhVUPnC96TOMOX4'
    //     },
    //     {
    //         img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=2147483647&v=beta&t=oeyqj6yO2Wf07SJkiTXnpAag12Yp0H9akDR6dwoVa3k',
    //         name: 'Ishaan Gupta',
    //         bio: 'Recent Computer Science graduate from The University of British Columbia',
    //         mutuals: 'Suhasini Sood',
    //         numConnections: 41,
    //         bgrndImg: 'https://media.licdn.com/dms/image/v2/D4D16AQEcYKac_Zcrww/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1716388453884?e=2147483647&v=beta&t=C2Qu-Ts1IwaGiNEpDbb6kiF5Gf3bDK9ykqlu81L8kwY'
    //     }
    // ];

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchNetworkProfiles().then(data => setProfiles(data));
    }, [])

    const handleRemoveProfile = (profile) => {
        const updatedProfiles = profiles.filter(item => item !== profile);
        setProfiles(updatedProfiles);
    }

    return (
        <div className="recommendedProfilesContainer">
            <div className="recommendedProfilesHeader">
                <span>People you may know</span>
                <button>Show all</button>
            </div>
            <div className="recommendedProfiles">
                {profiles.slice(0, 8).map(profile => (
                    <div className="recommendedProfile">
                        <div className="recommendedProfileBanner">
                            <img src={profile.bgrndImage} className="recommendedProfileBannerImage" />
                            <button onClick={() => handleRemoveProfile(profile)}><CloseOutlinedIcon style={{ height: '20px', width: '20px', marginTop: '2px' }} /></button>
                            <img src={profile.image} className="recommendedProfileUserImage" />
                        </div>
                        <div className="recommendedProfileUserInfo">
                            <p>{profile.name}</p>
                            <p>{profile.bio.length > 35 ? profile.bio.slice(0, 35) + ' ...' : profile.bio}</p>
                        </div>
                        <div className="recommendedProfileConnect">
                            <p>{profile.mutuals + ' and ' + profile.numConnections + ' other mutual connections'}</p>
                            <button onClick={() => handleRemoveProfile(profile)}><PersonAddIcon style={{ height: '22px', width: '22px' }} /><span>Connect</span></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecommendedProfiles;