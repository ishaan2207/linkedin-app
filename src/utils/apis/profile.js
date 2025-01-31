const fetchRecommendedProfiles = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-profile');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching recommended profiles: ', err);
    }
};

const fetchProfileInformation = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-profile/info');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching profile information: ', err);
    }
};

const fetchProfileExperience = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-profile/experience');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching profile experiences: ', err);
    }
};

const fetchProfileEducation = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-profile/education');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching profile education: ', err);
    }
};

const createProfileExperience = async (experience) => {
    try {
        console.log('title: ', experience.title);
        const reqBody = {
            title: experience.title,
            company: experience.company,
            location: experience.location,
            startDate: experience.startDate,
            endDate: experience.endDate,
            descriptions: experience.descriptions,
        };

        const response = await fetch('http://localhost:9999/create-profile/experience', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        });

        const data = await response.json();
        console.log('Profile experience created successfully: ', data);
    } catch (err) {
        console.error('Error in creating new profile experience: ', err);
    }
};

export { fetchRecommendedProfiles, fetchProfileInformation, fetchProfileExperience, fetchProfileEducation, createProfileExperience };