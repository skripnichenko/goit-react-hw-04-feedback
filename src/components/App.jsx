import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (e) => {
    const chosenFeedback = e.target.value;
    this.setState(prevState => ({ [chosenFeedback]: prevState[chosenFeedback] + 1 }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Number(((good * 100) / this.countTotalFeedback()).toFixed()) : 0;
  }

  render() {
    const state = this.state;
    const allOptions = Object.keys(state);
    const { good, neutral, bad } = state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className='App'>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={allOptions} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {total ? <Section title='Statistics'>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section>
          : <Notification message='There is no feedback' />}
      </div>
    );
  }
}
