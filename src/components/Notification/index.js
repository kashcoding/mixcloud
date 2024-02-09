import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as LiveIcon } from '../../assets/live.svg';

const Notification = ({ user, onClose }) => {
    const liveUrl = user.url.replace(
        'https://www.mixcloud.com/',
        'https://www.mixcloud.com/live/'
    );

    const fade = !!user.fade;

    return (
        <output className={`${styles.toast} ${fade ? styles.fadeOut : ''}`}>
            <a href={liveUrl} target="_blank" rel="noreferrer">
                <img
                    src={user.pictures.thumbnail}
                    alt=""
                    className={styles.notifAvatar}
                />
                <div className={styles.notifText}>
                    <span className={styles.notifTitle}>{user.name}</span>
                    <span className={styles.notifMessage}>
                        Has gone live - watch now!
                    </span>
                </div>
                <LiveIcon className={styles.live} />
            </a>
            <CloseIcon className={styles.close} onClick={() => onClose(user)} />
        </output>
    );
};

Notification.propTypes = {
    user: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Notification;
