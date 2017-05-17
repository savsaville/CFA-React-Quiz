import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line, Circle } from 'rc-progress';

//
class ProgressBar extends Component {
  render() {
    return  (
      <Line percent={(this.props.current_step-1)/this.props.question_length*100} strokeWidth="1" strokeColor="Blue"/>
    )
  }
}

//Stateless component
//
// const ProgressBar = (props) => {
//   return <p> {props.current_step}/{props.question_length}</p>
// }



ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired
}



export default ProgressBar;
