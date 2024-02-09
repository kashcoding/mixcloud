import React from 'react';
import PropTypes from 'prop-types';
import styles from './Guide.module.css';

const Main = ({ guide }) => (
    <a href={guide.url} target="_blank" rel="noreferrer">
        <div className={styles.guide}>
            <img src={guide.src} alt="" className={styles.guideImg} />
            <div className={styles.guideText}>
                <h4>{guide.title}</h4>
                <span>{guide.mins} minute read</span>
            </div>
        </div>
    </a>
);

Main.propTypes = {
    guide: PropTypes.object.isRequired
};

export default Main;
