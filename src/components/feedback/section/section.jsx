import React from 'react';
import css from './section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children, text }) => {
  return (
    <div className={css.section}>
      {text && <p className={css.section__title}>{text}</p>}
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  text: PropTypes.string.isRequired,
};
