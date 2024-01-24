import React from "react";
import { Link } from "react-router-dom";
import styles from "../component-styles/UserInfo.module.css";

const UserInfo = ({ user }) => {
    return (
        <div className={styles.ProfileCard}>
            {user && (
                <div>
                    <img className={styles.profileImg} src={user.avatar_url} alt={user.login} />
                    <p className={styles.profileName}>{user.login}</p>

                    <Link to={`/followers/${user.login}`}>
                        <button className={styles.viewFollowersBtn}>View Followers</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
