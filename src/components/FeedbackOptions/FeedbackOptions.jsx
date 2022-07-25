import React from 'react';
import PropTypes from "prop-types";
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options = [], onLeaveFeedback = () => { } }) => {
  return (
    <div className={styles.options}>
      {options.map((el, ind) => {
        return <div className={styles.buttonWrapper} key={ind}>
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
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions