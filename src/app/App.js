import React, { Component } from 'react';
import '../app/App.css';
import Question from '../questions/Question';
import ProgressBar from '../progressbar/ProgressBar';
import MultiChoice from '../multichoice/MultiChoice';
import Results from '../results/Results';
import { Button, Icon, Col, Card } from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'Pick One!',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.retryButton = this.retryButton.bind(this);
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
      },
      {
        question: 'who is the worst at table tennis in the class?',
        correct_answer: 'Josh',
        possible_answers: [ 'Josh', 'Josh', 'Josh', 'Josh']
      }
    ]
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'Pick One!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'Pick One!!!!'
      })
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  retryButton() {
    this.setState({
      progress: 0
    })
  }

  render() {
    return (
      <div className="App">
        <Col m={6} s={12}>
            <Card className='green darken-3' textClassName='white-text' title={<h2>Quiz App</h2>} actions={[<a href='#'>This is a link</a>]}>


        {this.state.progress < this.quiz_data.length ? (
          <div>
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results score={this.state.score} end_message="Congratulations, you have finished!"
                 handleReset={this.retryButton}/>
         )}
       </Card>
   </Col>
      </div>
    );
  }
}

export default App;
