import React from 'react';
import styles from './SideNavbar.module.css';
import avatar from '../../assets/dj-yoda.jpg';

const SideNavbar = () => {
    return (
        <div className={styles.sideNavContainer}>
            <div className={styles.userLinks}>
                <img className={styles.avatar} src={avatar} alt="user avatar" />
                <div>
                    <h4>DJ Yoda</h4>
                    <button>View Profile</button>
                </div>
            </div>
            <div className={styles.section}>
                <button>Feed</button>
                <button>New Uploads</button>
            </div>
            <div className={styles.section}>
                <button className={styles.selected}>Dashboard</button>
                <button>My Shows</button>
                <button>My Tracks</button>
                <button>Stats</button>
                <button>Posts</button>
                <button>Earnings</button>
            </div>
            <div className={styles.section}>
                <button>Favorites</button>
                <button>Listen Later</button>
                <button>History</button>
                <button>Playlists</button>
            </div>
            <div className={styles.section}>
                <button>Categories</button>
                <button>Trending</button>
                <button>Live Now</button>
            </div>
        </div>
    );
};

export default SideNavbar;
