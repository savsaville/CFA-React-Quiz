import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
// class ProgressBar extends Component {
//   render() {
//     return <p> {this.props.current_step}/{this.props.question_length}</p>
//   }
// }

//Stateless component

const ProgressBar = (props) => {
  return <p> {props.current_step}/{props.question_length}</p>
}



ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired
}



export default ProgressBar;
