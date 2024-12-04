import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import SquareIcon from '@mui/icons-material/Square';

function Navbar() {
    const navigate = useNavigate();

    const ICON_DIMENSIONS = '28px';
    const styles = { height: ICON_DIMENSIONS, width: ICON_DIMENSIONS, color: 'gray', hover: 'black' }

    const navItems = [
        {
            id: 1,
            icon: <HomeIcon style={styles} />,
            text: "Home",
            path: '/'
        },
        {
            id: 2,
            icon: <PeopleIcon style={styles} />,
            text: "My Network",
            path: '/my-network'
        },
        {
            id: 3,
            icon: <WorkIcon style={styles} />,
            text: "Jobs",
            path: '/jobs'
        },
        {
            id: 4,
            icon: <SmsIcon style={styles} />,
            text: "Messaging",
            path: '/messages'
        },
        {
            id: 5,
            icon: <NotificationsIcon style={styles} />,
            text: "Notifications",
            path: '/notifications'
        },
        {
            id: 6,
            icon: <AccountCircleIcon style={styles} />,
            text: "Me",
            path: '/profile'
        }
    ]

    function goToHome() {
        navigate('/');
    }

    function goToPage(path) {
        navigate(path);
    }

    return (
        <div className='navContainer'>
            {/*LeftSide*/}
            <div className='navLeft'>
                <div className='navLeftIcon' onClick={goToHome}>
                    <LinkedInIcon
                        style={{ color: "#0A66C2", height: '45px', width: '45px' }}
                    />
                </div>
                <div>
                    <div className='navLeftInputContainer'>
                        <SearchIcon style={{ position: 'absolute', top: '5px', padding: '0 10px' }} />
                    </div>
                    <input type='text' placeholder='Search' />
                </div>
            </div>
            {/*RightSide*/}
            <div className='navRight'>
                <div className='navItems'>
                    {navItems.map((navItem, key) => (
                        <div className='navItemsContainer' onClick={() => goToPage(navItem.path)}>
                            <div className='navItemsIcon'>{navItem.icon}</div>
                            <p className='navItemsText'>{navItem.text}</p>
                        </div>
                    ))}
                </div>
                <div className='navRightBusinessContainer'>
                    <div className='navItemsContainer'>
                        <div className='navItemsIcon'><AppsIcon style={styles} /></div>
                        <p className='navItemsText'>For Business</p>
                    </div>
                    <div className='navItemsContainer tryPremiumIcon'>
                        <div className='navItemsIcon'><SquareIcon style={styles} /></div>
                        <p className='navItemsText'>Try Premium for ₹0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;