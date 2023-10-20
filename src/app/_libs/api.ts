// search top 10 users by location
export const searchTopUsers = async (location: string) => {
    // give header to avoid rate limit
    const res = await fetch(
        `https://api.github.com/search/users?q=location:${location}&sort=followers&order=desc&per_page=30`,
        {
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
        }
    );
    const data = await res.json();
    return data.items;
};

// fetch user details by username
export const getUserDetails = async (username: string) => {
    // give header to avoid rate limit
    const res = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
    });

    const data = await res.json();
    return data;
};
