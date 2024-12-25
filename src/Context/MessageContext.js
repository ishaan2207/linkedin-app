import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
    const messagesArray = [
        {
            id: 1,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'John',
            lastName: 'Doe',
            date: 'Jul 23',
            text: 'Hi Ishaan, I came across your profile and was impressed by your experience. Would you be open to connecting?',
            userBio: 'Software Engineer | React & Node.js Enthusiast',
            timeSent: '14:35'
        },
        {
            id: 2,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Jane',
            lastName: 'Smith',
            date: 'Nov 8',
            text: 'Hey Ishaan, I’m looking for a front-end developer for an exciting project. Let me know if you’re interested!',
            userBio: 'Frontend Developer | Passionate About Design',
            timeSent: '09:20'
        },
        {
            id: 3,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Alice',
            lastName: 'Johnson',
            date: 'May 21',
            text: 'Hi, I noticed we’re in the same industry! Would love to chat about your experience with front-end technologies.',
            userBio: 'UI/UX Designer | Advocate for User-Centered Design',
            timeSent: '18:45'
        },
        {
            id: 4,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Michael',
            lastName: 'Brown',
            date: 'Oct 18',
            text: 'Hello Ishaan, I’m hosting a tech meetup in Kelowna next week. Thought you might be interested!',
            userBio: 'Tech Enthusiast | Community Builder',
            timeSent: '11:50'
        },
        {
            id: 5,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Emily',
            lastName: 'Davis',
            date: 'Sep 4',
            text: 'Hi Ishaan, great profile! Are you open to discussing potential collaboration opportunities?',
            userBio: 'Marketing Strategist | Creative Problem Solver',
            timeSent: '15:10'
        },
        {
            id: 6,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Chris',
            lastName: 'Wilson',
            date: 'Feb 24',
            text: 'Hi, I see you’re skilled in React and JavaScript. I’d love to learn more about your recent projects.',
            userBio: 'Full-Stack Developer | React and Node.js Expert',
            timeSent: '08:05'
        },
        {
            id: 7,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'Laura',
            lastName: 'Taylor',
            date: 'Dec 5',
            text: 'Hi Ishaan, I’d love to hear your thoughts on the latest front-end trends. Let’s connect!',
            userBio: 'Frontend Developer | Trend Spotter in Web Technologies',
            timeSent: '19:25'
        },
        {
            id: 8,
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGYxNTXYJlddQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699309825094?e=1740009600&v=beta&t=O19igxDhgXxNCnwIe2WI6tL170o0tFvgtax3NZIh-1M',
            firstName: 'David',
            lastName: 'Anderson',
            date: 'Jul 13',
            text: 'Hi Ishaan, I’m recruiting for a software role that matches your skill set. Can we set up a quick call?',
            userBio: 'Talent Acquisition Specialist | Tech Industry Focus',
            timeSent: '16:30'
        }
    ];

    const [messages, setMessages] = useState(messagesArray);

    return (
        <MessageContext.Provider value={{ messages, setMessages }}>
            {children}
        </MessageContext.Provider>
    )
}

const useMessage = () => {
    return useContext(MessageContext);
}

export { MessageProvider, useMessage };