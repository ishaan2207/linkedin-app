const fetchNetworkInvites = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-network');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching network invites: ', err);
    }
}

const fetchNetworkProfiles = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-network/profiles');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching network profiles: ', err);
    }
}

const deleteNetworkInvite = async (invite) => {
    try {
        const response = await fetch(`http://localhost:9999/delete-network/${invite._id}`, {
            method: 'DELETE',
        })

        const data = response.json();
        console.log('Successfully removed network invite: ', data);
    } catch (err) {
        console.error('Error in deleting network invite: ', err);
    }
}

const deleteNetworkProfile = async (profile) => {
    try {
        const response = await fetch(`http://localhost:9999/delete-network/profile/${profile._id}`, {
            method: 'DELETE',
        })

        const data = response.json();
        console.log('Successfully removed network profile: ', data);
    } catch (err) {
        console.error('Error in deleting network profile: ', err);
    }
}

export { fetchNetworkInvites, deleteNetworkInvite, fetchNetworkProfiles, deleteNetworkProfile };