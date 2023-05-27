import React from 'react';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};