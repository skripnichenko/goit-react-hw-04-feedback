import React from 'react';
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

const Statistics = ({ good = 0, bad = 0, neutral = 0, total = 0, positivePercentage = 0 }) => {
    return (
        <div className={styles.statisticWrapper}>
            <div>
                Good: <span>{good}</span>
            </div>
            <div>
                Neutral: <span>{neutral}</span>
            </div>
            <div>
                Bad: <span>{bad}</span>
            </div>
            <div>
                Total: <span>{total}</span>
            </div>
            <div>
                Positive feedback: <span>{positivePercentage}%</span>
            </div>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics