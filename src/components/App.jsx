import React from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [statistic, setStatistic] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const onLeaveFeedback = (e) => {
    const chosenFeedback = e.target.value;
    setStatistic(prevStatistic => ({ ...prevStatistic, [chosenFeedback]: prevStatistic[chosenFeedback] + 1 }))
  }

  const countTotalFeedback = () => {
    return Object.values(statistic).reduce((acc, cur) => acc += cur, 0);
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Number(((statistic.good * 100) / countTotalFeedback()).toFixed()) : 0;
  }

  const allOptions = Object.keys(statistic);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className='App'>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={allOptions} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {total ? <Section title='Statistics'>
        <Statistics good={statistic.good} neutral={statistic.neutral} bad={statistic.bad} total={total} positivePercentage={positivePercentage} />
      </Section>
        : <Notification message='There is no feedback' />}
    </div>
  );
}
export default App;