// deps
import React, { useEffect, useState } from "react";

// styles
import './NotificationsFeed.css';

// components
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CircleIcon from '@mui/icons-material/Circle';

// apis
import { fetchNotifications } from "../../../utils/apis/notifications";

function NotificationsFeed() {
    const notification = [
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'John Doe commented on your post: "Great insights, thank you for sharing!',
            time: '1h',
            read: false,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'You have a new connection request from Jane Smith.',
            time: '2h',
            read: false,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'Your job application for "Frontend Developer" was viewed by the recruiter.',
            time: '5h',
            read: false,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'LinkedIn: "Check out this new article on improving your professional network."',
            time: '8h',
            read: true,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'Michael Brown endorsed you for your skills in React.js and JavaScript.',
            time: '1d',
            read: true,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'Your recent post reached 500 views! Keep up the great work.',
            time: '2d',
            read: false,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'Sarah Connor shared a post: "Top 10 tips for remote work efficiency."',
            time: '3d',
            read: true,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'You were mentioned in a comment by Kevin Lee: "I agree, @You are spot on!"',
            time: '5d',
            read: true,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'Your job alert: "Software Engineer in Vancouver, BC" has 5 new openings.',
            time: '1w',
            read: true,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'LinkedIn News: "Tech industry trends to watch in 2025."',
            time: '2w',
            read: false,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1741824000&v=beta&t=JVDGTfU7uu04WQ23sRKLcah6ZXPu7XM85Hqq9ZvQ9tA',
            text: 'Alex Johnson congratulated you on your work anniversary: "Congrats on 2 years!"',
            time: '3w',
            read: false,
        },
    ];

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications().then(data => setNotifications(data));
    }, [])

    return (
        <div className="notificationsFeedContainer">
            <div className="notificationsFeed">
                {notifications.map((notification, key) => (
                    <div className={`notification ${notification.read ? '' : 'unread'}`}>
                        {notification.read ? '' : <CircleIcon style={{ height: '10px', width: '10px', color: '#0A66C2', marginLeft: '-4px' }} />}
                        <img src={notification.image} alt="" />
                        <span className="notificationText">{notification.text}</span>
                        <div className="notificationRight">
                            <span>{notification.time}</span>
                            <button><MoreHorizIcon /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotificationsFeed;