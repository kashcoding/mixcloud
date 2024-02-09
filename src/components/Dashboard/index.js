import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import video from '../../assets/mc_vid.mp4';
import guide1 from '../../assets/guide1.jpg';
import guide2 from '../../assets/guide2.jpg';
import guide3 from '../../assets/guide3.jpg';
import UserRow from './UserRow';
import Guide from './Guide';

const Dashboard = ({ users }) => {
    const usersWithStats = users.map((user) => {
        return {
            ...user,
            followers: Math.floor(Math.random() * 10000),
            time: Math.floor(Math.random() * 10)
        };
    });

    const guides = [
        {
            src: guide1,
            url: 'https://blog.mixcloud.com/2023/09/21/mixclouds-on-rotation-a-guide-to-hyperpop/',
            title: 'Mixcloud’s On Rotation: A Guide To Hyperpop',
            mins: 9
        },
        {
            src: guide2,
            url: 'https://blog.mixcloud.com/2023/10/02/a-guide-to-beatmatching/',
            title: 'A Guide To Beatmatching',
            mins: 6
        },
        {
            src: guide3,
            url: 'https://blog.mixcloud.com/2023/06/06/a-fast-guide-to-your-new-mixcloud-channel/',
            title: 'A Fast Guide To Your New Mixcloud Channel',
            mins: 3
        }
    ];

    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <div className={styles.btnRow}>
                <button>UPLOAD</button>
                <button>GO LIVE</button>
                <button>CREATE POST</button>
                <button>CUSTOMISE PROFILE</button>
            </div>
            <div className={styles.overview}>
                <div className={styles.headings}>
                    {/* In real the product, these main section headings are h4,
                    same as the 'no activity text' under Notification, while the
                    numbers in stats are h3 - I've instead implemented semantic
                    hierarchy with additional styling to improve accessibility */}
                    <h2>Channel Overview</h2>
                    <h3>FULL STATS</h3>
                </div>
                <div className={styles.content}>
                    <div className={styles.statsContainer}>
                        <div className={styles.stats}>
                            <span>{Math.floor(Math.random() * 10000)}</span>
                            <span>Followers</span>
                        </div>
                        <div className={styles.stats}>
                            <span>{Math.floor(Math.random() * 5000)}</span>
                            <span>Total plays</span>
                        </div>
                        <div className={styles.stats}>
                            <span>{Math.floor(Math.random() * 10000)}</span>
                            <span>Minutes listened</span>
                        </div>
                        <div className={styles.stats}>
                            <span>{Math.floor(Math.random() * 2500)}</span>
                            <span>Favorites</span>
                        </div>
                        <div className={styles.stats}>
                            <span>{Math.floor(Math.random() * 500)}</span>
                            <span>Comments</span>
                        </div>
                        <div className={styles.stats}>
                            <span>{Math.floor(Math.random() * 1000)}</span>
                            <span>Reposts</span>
                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.video}`}>
                        <video src={video} controls />
                    </div>
                </div>
            </div>
            <div className={`${styles.grid} ${styles.interactions}`}>
                <div>
                    <div className={styles.headings}>
                        <h2>Top listeners this week</h2>
                    </div>
                    {usersWithStats.slice(0, 4).map((listener, i) => (
                        <UserRow key={i} user={listener} />
                    ))}
                </div>
                <div>
                    <div className={styles.headings}>
                        <h2>Latest followers</h2>
                        <h3>VIEW ALL</h3>
                    </div>
                    {usersWithStats.slice(4, 8).map((follower, i) => (
                        <UserRow key={i} user={follower} />
                    ))}
                </div>
                <h3>
                    <a href="https://www.mixcloud.com/pro/">LEARN MORE</a>
                </h3>
            </div>
            <div className={styles.notifications}>
                <div className={styles.headings}>
                    <h2>Notifications</h2>
                </div>
                <div className={`${styles.container} ${styles.notifBlock}`}>
                    <span>There is no activity on your channel yet</span>
                    <span>
                        This is where you’ll keep track of new followers, likes
                        and reposts
                    </span>
                </div>
            </div>
            <div className={styles.guides}>
                <div className={styles.headings}>
                    <h2>Creator guides</h2>
                    <h3>
                        <a href="https://campus.mixcloud.com/">SEE ALL</a>
                    </h3>
                </div>
                <div className={styles.guideGrid}>
                    {guides.map((guide, i) => (
                        <Guide key={i} guide={guide} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            pictures: PropTypes.shape({
                thumbnail: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired
};

export default Dashboard;
