import React from 'react';
import css from './Feedback.module.css';
import propTypes from 'prop-types'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map(key => {
                return (
                    <li key={key} className={css.list}>
                        <button
                            name={key}
                            className={css.button}
                            type="button"
                            onClick={onLeaveFeedback}
                        >
                            {key}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;