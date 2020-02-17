import React, { Component } from 'react';
import cpaQuestions from './api/cpaQuestions';
import Quiz from './components/Quiz';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 'start',
      prevQuestions: [],
      question: '',
      answerOptions: [],
      notes: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  findQuestion(questionId) {
    return cpaQuestions.find(obj => {
      return obj.id === questionId
    })
  }

  componentDidMount() {
    const target = this.findQuestion('start');

    this.setState({
      questionId: 'start',
      question: target.question,
      answerOptions: target.buttons,
      notes: target.notes ? target.notes : ''
    });
  }

  handleAnswerSelected(questionId) {
    let target = this.findQuestion(questionId);
    const prevQuestions = [...this.state.prevQuestions];
    prevQuestions.push(this.state.questionId);
    this.setState({
      counter: this.state.counter + 1,
      questionId: questionId,
      prevQuestions: prevQuestions,
      question: target.question,
      answerOptions: target.buttons,
      notes: target.notes
    });
  }

  handleBack() {
    let questionId = 'start';
    let prevQuestions = [];
    let counter = this.state.counter;
    if (this.state.prevQuestions.length) {
      prevQuestions = [...this.state.prevQuestions];
      questionId = prevQuestions.pop();
      counter--;
    }
    let target = this.findQuestion(questionId);
    this.setState({
      counter: counter,
      questionId: questionId,
      prevQuestions: prevQuestions,
      question: target.question,
      answerOptions: target.buttons,
      notes: target.notes
    });
  }

  handleReset() {
    this.setState({
      counter: 0,
      prevQuestions: []
    });
    this.componentDidMount();
  }

  renderQuiz() {
    const that = this;
    function reset(e) {
      e.preventDefault();
      that.handleReset('start');
    }
    function back(e) {
      e.preventDefault();
      that.handleBack();
    }

    return (
      <div>
        <Quiz
          notes={this.state.notes}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={cpaQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
        <div className="cpa_bottom">
        <button onClick={back} className="toggleExpand">&lt;&nbsp;Back</button>
        <button onClick={reset} className="toggleExpand">Reset</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="cpa_app">
        {this.renderQuiz()}
      </div>
    );
  }
}

export default App;
