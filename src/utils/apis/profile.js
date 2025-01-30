const fetchRecommendedProfiles = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-profile');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching recommended profiles: ', err);
    }
}

const fetchProfileInformation = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-profile/info');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching profile information: ', err);
    }
}

export { fetchRecommendedProfiles, fetchProfileInformation };