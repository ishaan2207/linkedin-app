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

const createProfileEducation = async (education) => {
    try {
        const reqBody = {
            location: education.location,
            field: education.field,
            dates: education.dates,
        };

        const response = await fetch('http://localhost:9999/create-profile/education', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        });

        const data = await response.json();
        console.log('Profile education created successfully: ', data);
    } catch (err) {
        console.error('Error in creating new profile education: ', err);
    }
}

const updateProfileInfo = async (id, info) => {
    const reqBody = {
        name: info.name,
        pronouns: info.pronouns,
        bio: info.bio,
        location: info.location,
        universityName: info.universityName,
        image: info.image,
        bannerImg: info.bannerImg,
    }
    try {
        const response = await fetch(`http://localhost:9999/update-profile/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = response.json();
        console.log('Profile information updated successfully: ', data);
    } catch (err) {
        console.error('Error in updating profile information: ', err);
    }
}

const updateProfileAbout = async (id, about) => {
    const reqBody = {
        about: about
    };
    try {
        const response = await fetch(`http://localhost:9999/update-profile/about/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = await response.json();
        console.log('Profile about updated successfully: ', data);
    } catch (err) {
        console.error('Error in updating profile about: ', err);
    }
};

export { fetchRecommendedProfiles, fetchProfileInformation, fetchProfileExperience, fetchProfileEducation, createProfileExperience, createProfileEducation, updateProfileInfo, updateProfileAbout };