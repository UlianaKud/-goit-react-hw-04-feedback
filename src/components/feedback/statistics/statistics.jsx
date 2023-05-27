import React from 'react';
import Notification from './notificationMessage';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (!good && !neutral && !neutral) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <div className={css.statistics}>
      <p className={css.statistics__titile}>Statistics</p>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>
          <span>Good:{good}</span>
        </li>
        <li>
          <span>Neutral:{neutral}</span>
        </li>
        <li>
          <span>Bad:{bad}</span>
        </li>
        <li>
          <span>Total:{total}</span>
        </li>
        <li>
          <span>Positive feedback:{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
