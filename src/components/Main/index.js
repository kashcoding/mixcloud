import React from 'react';
import PropTypes from 'prop-types';
import SideNavbar from '../SideNavbar';
import Dashboard from '../Dashboard';
import styles from './Main.module.css';

const Main = ({ users }) => {
    return (
        <div className={styles.main}>
            <SideNavbar />
            <Dashboard users={users} />
        </div>
    );
};

Main.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

export default Main;
