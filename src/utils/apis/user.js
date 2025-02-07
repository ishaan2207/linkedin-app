const { LOCAL_URL } = require('./constants');

const createUser = async (user) => {
    console.log('user', user);
    try {
        const reqBody = {
            userId: user.userId,
            name: user.name,
            image: user.image,
        };
        const response = await fetch(`${LOCAL_URL}/create-user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        });

        const data = response.json();
        console.log('New user created successfully: ', data);
    } catch (err) {
        console.error('Error in creating new user: ', err);
    }
}

export default createUser;