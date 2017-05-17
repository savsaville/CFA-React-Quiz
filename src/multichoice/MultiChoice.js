import React, { Component } from 'react';
import { Button, Icon, } from 'react-materialize';
import PropTypes from 'prop-types';

class MultiChoice extends Component {
  render() {
    return (
      <div>

          {this.props.answers.map((answer, i) => <button key={i} onClick={() => this.props.updateSelected(answer)}> {answer} </button>)}
          <p> You have selected: {this.props.selectedAnswer} </p>
          <Button waves='light' onClick={this.props.handleSubmit}><Icon left>done</Icon>Submit</Button>


      </div>
    )
  }
}

  MultiChoice.propTypes = {
   answers: PropTypes.array.isRequired,
   updateSelected: PropTypes.func.isRequired,
   handleSubmit: PropTypes.func.isRequired,
   selectedAnswer: PropTypes.string.isRequired
  }




export default MultiChoice;
