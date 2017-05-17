import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';
import { Button, Icon, } from 'react-materialize';

it('renders without crashing', () => {
  var sample_data = [
    {
      question: 'what is the meaning of life?',
      correct_answer: '42',
      possible_answers: [ 'Love', 'Money', 'Javascript', '42']
    }
  ]

  const div = document.createElement('div');
  ReactDOM.render(<MultiChoice answers = {sample_data[0].possible_answers } />, div);
});
