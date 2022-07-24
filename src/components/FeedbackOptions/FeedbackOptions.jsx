import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
    onLeaveFeedback: () => { }
  };

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };


  render() {
    const { options, onLeaveFeedback } = this.props;
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
}

export default FeedbackOptions