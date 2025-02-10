// deps
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './Navbar.css';

// components
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NavModal from './NavModal/NavModal';

function Navbar({ user }) {
    const navigate = useNavigate();

    const [collapseIcons, setCollapseIcons] = useState(window.innerWidth > 450);

    const ICON_DIMENSIONS = collapseIcons ? '28px' : '23px';
    const styles = { height: ICON_DIMENSIONS, width: ICON_DIMENSIONS, color: 'gray', hover: 'black' }

    const [showModal, setShowModal] = useState('none');

    const handleToggleModal = () => {
        setShowModal(prev => prev === 'none' ? 'block' : 'none');
    }

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
            path: '/messaging'
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
            text: user ? user?.name : 'Me',
            path: '/profile'
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            setCollapseIcons(window.innerWidth > 450);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                        <div className='navSearchIcon'>
                            <SearchIcon />
                        </div>
                        <p className='searchButtonText'>Search</p>
                    </div>
                    <input type='text' placeholder='Search' className='navSearchInput' />
                </div>
            </div>
            {/*RightSide*/}
            <div className='navRight'>
                <div className='navItems'>
                    {navItems.map((navItem, key) => (
                        <div className='navItemsParentContainer' key={key}>
                            {navItem.path !== '/profile' ?
                                <div className='navItemsContainer' onClick={() => goToPage(navItem.path)}>
                                    <div className='navItemsIcon'>{navItem.icon}</div>
                                    <p className='navItemsText'>{navItem.text}</p>
                                </div> :
                                <div className='navItemProfile'>
                                    <div className='navItemsContainer' onClick={handleToggleModal}>
                                        <div className='navItemsIcon'>{navItem.icon}</div>
                                        <p className='navItemsText'>{navItem.text}</p>
                                    </div>
                                    <NavModal showModal={showModal} setShowModal={setShowModal} />
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <div className='navRightBusinessContainer'>
                    {collapseIcons ?
                        <div className='premiumIconsContainer'>
                            <div className='navItemsContainer'>
                                <div className='navItemsIcon'><AppsIcon style={styles} /></div>
                                <p className='navItemsText'>For Business</p>
                            </div>
                            <div className='navItemsContainer tryPremiumIcon'>
                                <div className='navItemsIcon'><SquareIcon style={styles} /></div>
                                <p className='navItemsText'>Try Premium for ₹0</p>
                            </div>
                        </div>
                        : <div className='navItemsContainer collapsedIconsMore'>
                            <div className='navItemsIcon'><MoreHorizIcon style={styles} /></div>
                            <p className='navItemsText'>For Business</p>
                        </div>}

                </div>
            </div>
        </div>
    )
}

export default Navbar;