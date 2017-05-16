import React, { Component } from 'react';
import './App.css';
import Question from './Question';
import ProgressBar from './ProgressBar';
import MultiChoice from './MultiChoice';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
    this.quiz_data = [
      {
        question: 'what is the meaning of life?',
        correct_answer: '42',
        possible_answers: [ 'Love', 'Money', 'Javascript', '42']
      },
      {
        question: 'What is the best cake?',
        correct_answer: 'Steak',
        possible_answers: [ 'Chocolate Cake', 'Cheesecake', 'Pavlova', 'Steak']
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h2>Quiz App</h2>
        <Question current_question={this.quiz_data[this.state.progress].question} />
        <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
        <MultiChoice />
      </div>
    );
  }
}

export default App;