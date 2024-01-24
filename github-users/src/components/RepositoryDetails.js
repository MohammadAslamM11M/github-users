import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../logo192.png";
import styles from "../component-styles/RepositoryDetails.module.css";

const RepositoryDetails = () => {
    const { repoName } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <img className={styles.repoImg} src={logo} />
            <h2>Repository Details</h2>
            <p className={styles.repoName}>Repository Name: {repoName}</p>
            <button className={styles.goBackBtn} onClick={() => navigate("/user/:username")}>
                Go back to user
            </button>
        </div>
    );
};

export default RepositoryDetails;
