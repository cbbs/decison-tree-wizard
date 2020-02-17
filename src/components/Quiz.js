import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
  function renderAnswerOption(key, index) {
    return (
      <AnswerOption
        key={index}
        answerTarget={key.target}
        answerLabel={key.label}
        notes={props.notes}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  function renderAnswerOptions(question) {
    if(props.answerOptions) {
      return (
        <div className="answer_options">
        {props.answerOptions.map(renderAnswerOption)}
      </div>
      )
    }
  }

  return (
    <CSSTransitionGroup
      className="cpa_container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <Question content={props.question} />
        {renderAnswerOptions()}
        {props.notes}
      </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
