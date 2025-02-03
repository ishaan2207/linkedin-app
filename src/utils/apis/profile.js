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

const createProfileSkill = async (id, skill) => {
    try {
        const reqBody = {
            skill: skill.skill,
            image: skill.image,
            learntFrom: skill.learntFrom,
        };

        const response = await fetch(`http://localhost:9999/create-profile/skill/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        });

        const data = await response.json();
        console.log('Profile skill created successfully: ', data);
    } catch (err) {
        console.error('Error in creating new profile skill: ', err);
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

const updateProfileExperience = async (experience) => {
    const reqBody = {
        title: experience.title,
        company: experience.company,
        companyImage: experience.companyImage,
        location: experience.location,
        startDate: experience.startDate,
        endDate: experience.endDate,
        descriptions: experience.descriptions,
    };
    try {
        const response = await fetch(`http://localhost:9999/update-profile/experience/${experience._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = response.json();
        console.log('Successfully updated profile experience: ', data);
    } catch (err) {
        console.error('Error in udating profile experience: ', err);
    }
}

const updateProfileEducation = async (education) => {
    const reqBody = {
        image: education.image,
        location: education.location,
        field: education.field,
        dates: education.dates,
    };
    try {
        const response = await fetch(`http://localhost:9999/update-profile/education/${education._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = response.json();
        console.log('Successfully updated profile education: ', data);
    } catch (err) {
        console.error('Error in updating profile eduation: ', err);
    }
}

const updateProfileSkill = async (skill) => {
    const reqBody = {
        skillId: skill.id,
        skill: skill.skill,
        image: skill.image,
        learntFrom: skill.learntFrom,
    };
    try {
        const response = await fetch(`http://localhost:9999/update-profile/skill/679b06280daa86b9790c50c3`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody),
        })

        const data = await response.json();
        console.log('Profile skill updated successfully: ', data);
    } catch (err) {
        console.error('Error in updating profile skill: ', err);
    }
}

export {
    fetchRecommendedProfiles, fetchProfileInformation, fetchProfileExperience, fetchProfileEducation, createProfileExperience,
    createProfileEducation, createProfileSkill, updateProfileInfo, updateProfileAbout, updateProfileExperience,
    updateProfileEducation, updateProfileSkill
};