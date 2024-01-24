import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo, fetchUserRepositories, fetchUserFollowers } from "../api/githubApi";
import styles from "../component-styles/InputForm.module.css";

const InputForm = ({ setUser, setRepositories, setFollowers }) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await fetchUserInfo(username);
            const repositories = await fetchUserRepositories(username);
            const followers = await fetchUserFollowers(username);

            setUser(user);
            setRepositories(repositories);
            setFollowers(followers);

            navigate(`/user/${username}`);
        } catch (error) {
            console.error("Error fetching user information:", error.message);
        }
    };

    return (
        <div className={styles.formStyle}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputFieldStyle}
                />
                <button className={styles.searchBtn} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default InputForm;
