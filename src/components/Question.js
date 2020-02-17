import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return <p className="question" dangerouslySetInnerHTML={{__html: props.content}}></p>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
