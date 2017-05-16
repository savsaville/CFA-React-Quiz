import React, { Component } from 'react';
import { Button, Icon, } from 'react-materialize';

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

export default MultiChoice;
