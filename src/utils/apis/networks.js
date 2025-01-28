const fetchNetworkInvites = async () => {
    try {
        const response = await fetch('http://localhost:9999/fetch-network');
        const data = response.json();
        return data;
    } catch (err) {
        console.error('Error in fetching network invites: ', err);
    }
}

export { fetchNetworkInvites };