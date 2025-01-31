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
        console.log('api: ', data);
        return data;
    } catch (err) {
        console.error('Error in fetching profile experiences: ', err);
    }
}

export { fetchRecommendedProfiles, fetchProfileInformation, fetchProfileExperience };