import React from 'react';
import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleClick = name => () => onLeaveFeedback(name);

  return (
    <ul className={css.list}>
      {options.map(({ keyValue, textButton }) => {
        return (
          <li className={css.list__item} key={keyValue}>
            <button
              className={css.list__button}
              onClick={handleClick(keyValue)}
            >
              {textButton}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      keyValue: PropTypes.string.isRequired,
      textButton: PropTypes.string.isRequired,
    })
  ),
};
