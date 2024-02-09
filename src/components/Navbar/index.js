import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/mc_logo.png';
import avatar from '../../assets/dj-yoda.jpg';

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.leftNav}>
                <img
                    src={logo}
                    href="https://www.mixcloud.com/"
                    alt="Mixcloud logo"
                    className={styles.logo}
                />
                <input
                    type="search"
                    placeholder="Search"
                    className={styles.search}
                />
            </div>
            <div className={styles.rightNav}>
                <button className={styles.navLinks}>Live</button>
                <button className={styles.navLinks}>Categories</button>
                <button className={styles.navLinks}>Plans</button>
                <button className={styles.createBtn}>CREATE</button>
                <img className={styles.avatar} src={avatar} alt="user avatar" />
            </div>
        </div>
    );
};

export default Navbar;
