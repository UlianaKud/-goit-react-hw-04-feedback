import React, { useState } from 'react';
import Section from './section/section';
import Statistics from './statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOptions';

const options = [
  { keyValue: 'good', textButton: 'Good' },
  { keyValue: 'neutral', textButton: 'Neutral' },
  { keyValue: 'bad', textButton: 'Bad' },
];

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);

        break;
      case 'neutral':
        setNeutral(neutral + 1);

        break;
      case 'bad':
        setBad(bad + 1);

        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.trunc((good / total) * 100);
  };

  return (
    <Section text="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};

export default Feedback;
