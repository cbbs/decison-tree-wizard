import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onAnswerSelected(props.answerTarget)
  }

  return (
    <span className="view_more">
      <button
        className="toggleExpand buttonToggle cpa_option"
        id={props.answerTarget}
        onClick={handleClick}>
        {props.answerLabel}</button>
    </span>
  );
}

AnswerOption.propTypes = {
  answerTarget: PropTypes.string.isRequired,
  answerLabel: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
