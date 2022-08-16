import React from 'react';
import PropTypes from "prop-types";
import styles from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options = [], onLeaveFeedback = () => { } }) => {
  return (
    <div className={styles.options}>
      {options.map(el => {
        const id = nanoid();

        return <div className={styles.buttonWrapper} key={id}>
          <button
            className={styles.button}
            value={el}
            onClick={onLeaveFeedback}
          >{el}</button>
        </div>
      })}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions