import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './ToastNotifications.module.css';

const ToastNotifications = ({ liveUsers }) => {
    const [toastList, setToastList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(3);

    useEffect(() => {
        setToastList(liveUsers.slice(0, 3));
    }, [liveUsers]);

    const removeAndAddUser = useCallback(
        (removeIndex) => {
            setToastList((prevList) =>
                prevList.map((item, index) =>
                    index !== removeIndex ? item : { ...item, fade: true }
                )
            );

            setTimeout(() => {
                setToastList((prevList) =>
                    [
                        ...prevList.slice(0, removeIndex),
                        ...prevList
                            .slice(removeIndex + 1)
                            .filter((item) => !item.fade),
                        currentIndex < liveUsers.length
                            ? liveUsers[currentIndex]
                            : undefined
                    ].filter(Boolean)
                );
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 250);
        },
        [currentIndex, liveUsers]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length && liveUsers.length) {
                removeAndAddUser(0);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [toastList, liveUsers, removeAndAddUser]);

    const removeUser = (user) => {
        const index = toastList.findIndex((item) => item.key === user.key);
        removeAndAddUser(index);
    };

    return (
        <div className={styles.toastContainer}>
            {toastList.map((user, i) => {
                return (
                    <Notification key={i} user={user} onClose={removeUser} />
                );
            })}
        </div>
    );
};

ToastNotifications.propTypes = {
    liveUsers: PropTypes.arrayOf(PropTypes.object)
};

export default ToastNotifications;
