// search top 10 users by location
export const searchTopUsers = async (location: string) => {
    const res = await fetch(
        `https://api.github.com/search/users?q=location:${location}&sort=followers&order=desc&per_page=30`
    );
    const data = await res.json();
    return data.items;
};

// fetch user details by username
export const getUserDetails = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    return data;
};
