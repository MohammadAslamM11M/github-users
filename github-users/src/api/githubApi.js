import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserInfo = async (username) => {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
};

export const fetchUserRepositories = async (username) => {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
};

export const fetchUserFollowers = async (username) => {
    const response = await axios.get(`${BASE_URL}/users/${username}/followers`);
    return response.data;
};
