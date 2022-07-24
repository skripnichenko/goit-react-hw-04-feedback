import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

export class Statistics extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0
    };

    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number,
        positivePercentage: PropTypes.number
    };

    render() {
        const { good, bad, neutral, total, positivePercentage } = this.props;
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
}

export default Statistics