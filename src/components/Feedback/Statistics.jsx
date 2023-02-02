import React from 'react';
import PropTypes from 'prop-types'
import css from './Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.list}>Good: {good}</li>
      <li className={css.list}>Neutral: {neutral}</li>
      <li className={css.list}>Bad: {bad}</li>
      <li className={css.list}>Total: {total}</li>
      <li className={css.list}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};



