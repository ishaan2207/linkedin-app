import React from "react";
import './Messages.css';
import MessagingPage from "./MessagingPage/MessagingPage";

function Messages() {
    const messages = [
        {
            id: 1,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'John',
            lastName: 'Doe',
            date: '2024-07-07',
            text: 'Hi Ishaan, I came across your profile and was impressed by your experience. Would you be open to connecting?',
            userBio: 'Software Engineer | React & Node.js Enthusiast'
        },
        {
            id: 2,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Jane',
            lastName: 'Smith',
            date: '2024-07-06',
            text: 'Hey Ishaan, I’m looking for a front-end developer for an exciting project. Let me know if you’re interested!',
            userBio: 'Frontend Developer | Passionate About Design'
        },
        {
            id: 3,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Alice',
            lastName: 'Johnson',
            date: '2024-07-05',
            text: 'Hi, I noticed we’re in the same industry! Would love to chat about your experience with front-end technologies.',
            userBio: 'UI/UX Designer | Advocate for User-Centered Design'
        },
        {
            id: 4,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Michael',
            lastName: 'Brown',
            date: '2024-07-04',
            text: 'Hello Ishaan, I’m hosting a tech meetup in Kelowna next week. Thought you might be interested!',
            userBio: 'Tech Enthusiast | Community Builder'
        },
        {
            id: 5,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Emily',
            lastName: 'Davis',
            date: '2024-07-03',
            text: 'Hi Ishaan, great profile! Are you open to discussing potential collaboration opportunities?',
            userBio: 'Marketing Strategist | Creative Problem Solver'
        },
        {
            id: 6,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Chris',
            lastName: 'Wilson',
            date: '2024-07-02',
            text: 'Hi, I see you’re skilled in React and JavaScript. I’d love to learn more about your recent projects.',
            userBio: 'Full-Stack Developer | React and Node.js Expert'
        },
        {
            id: 7,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Laura',
            lastName: 'Taylor',
            date: '2024-07-01',
            text: 'Hi Ishaan, I’d love to hear your thoughts on the latest front-end trends. Let’s connect!',
            userBio: 'Frontend Developer | Trend Spotter in Web Technologies'
        },
        {
            id: 8,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'David',
            lastName: 'Anderson',
            date: '2024-06-30',
            text: 'Hi Ishaan, I’m recruiting for a software role that matches your skill set. Can we set up a quick call?',
            userBio: 'Talent Acquisition Specialist | Tech Industry Focus'
        }
    ];


    return (
        <div className="messagesContainer">
            <MessagingPage messages={messages} />
        </div>
    )
}

export default Messages;