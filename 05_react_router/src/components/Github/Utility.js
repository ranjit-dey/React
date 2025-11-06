const githubUserInfo = async () => {
    const response = await fetch('https://api.github.com/users/ranjit-dey');
    return response.json();
}

export default githubUserInfo;
