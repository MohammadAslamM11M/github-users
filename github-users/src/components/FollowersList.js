// src/components/FollowersList.js
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "../component-styles/FollowersList.module.css";

const FollowersList = () => {
    const { username } = useParams();
    const [followers, setFollowers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/followers`);
                const data = await response.json();
                setFollowers(data);
            } catch (error) {
                console.error("Error fetching followers:", error.message);
            }
        };

        fetchFollowers();
    }, [username]);

    const handleFollowerClick = (followerName) => {
        navigate(`/follower-repositories/${followerName}`);
    };

    return (
        <div>
            <h2>Followers List</h2>
            <Link to={`/user/${username}`}>
                <button className={styles.goBackBtn}>Go Back</button>
            </Link>
            <div className={styles.followersList}>
                {followers.map((follower) => (
                    <div className={styles.repoLink} key={follower.id}>
                        <p>{follower.login}</p>
                        <button
                            className={styles.veiwFollowerRepoBtn}
                            onClick={() => handleFollowerClick(follower.login)}
                        >
                            View Repositories
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FollowersList;
