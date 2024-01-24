import React from "react";
import { Link } from "react-router-dom";
import styles from "../component-styles/Repository.module.css";
import logo from "../logo192.png";

const RepositoryList = ({ user, repositories }) => {
    return (
        <div className={styles.repoList}>
            {repositories.map((repo) => (
                <Link to={`/repository/${repo.name}`}>
                    <div className={styles.repoLink} key={repo.id}>
                        <img className={styles.repoImg} src={logo} />
                        <p className={styles.repoName}>{repo.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default RepositoryList;
