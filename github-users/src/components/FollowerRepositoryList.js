import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "../component-styles/FollowersList.module.css";

const FollowerRepositoryList = () => {
    const { followerName } = useParams();
    const [repositories, setRepositories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFollowerRepositories = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${followerName}/repos`);
                const data = await response.json();
                setRepositories(data);
            } catch (error) {
                console.error("Error fetching follower repositories:", error.message);
            }
        };

        fetchFollowerRepositories();
    }, [followerName]);

    const handleFollowerClick = (followerName) => {
        navigate(`/follower-repositories/${followerName}`);
    };

    return (
        <div>
            <h2>Repository List of {followerName}</h2>
            <Link to={`/user/${followerName}`}>
                <button className={styles.goBackBtn}>Go Back</button>
            </Link>
            {repositories.map((repo) => (
                <div className={styles.repoLink} key={repo.id}>
                    <p>{repo.name}</p>
                </div>
            ))}
        </div>
    );
};

export default FollowerRepositoryList;
