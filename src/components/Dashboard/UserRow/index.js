import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserRow.module.css';

const Main = ({ user }) => {
    const formatWordWithNumber = (word, number) => {
        const lastDigit = number.toString().slice(-1);
        let correctedWord = word;
        if (lastDigit > 1) {
            correctedWord = word + 's';
        }
        return `${number} ${correctedWord}`;
    };

    return (
        <a href={user.url} target="_blank" rel="noreferrer">
            <div className={`${styles.container} ${styles.userRow}`}>
                <div className={styles.userInfo}>
                    <img
                        className={styles.userAvatar}
                        src={user.pictures.thumbnail}
                        alt={`${user.name} avatar`}
                    />
                    <div className={styles.userText}>
                        <span className={styles.userName}>{user.name}</span>
                        <span className={styles.userFollowers}>
                            {formatWordWithNumber('follower', user.followers)}
                        </span>
                    </div>
                </div>
                <div className={styles.userText}>
                    <span className={styles.userTime}>
                        {formatWordWithNumber('day', user.time + 1)} ago
                    </span>
                </div>
            </div>
        </a>
    );
};

Main.propTypes = {
    user: PropTypes.object.isRequired
};

export default Main;
