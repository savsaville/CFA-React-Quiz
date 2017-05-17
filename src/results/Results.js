import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Icon, } from 'react-materialize';
import SweetAlert from 'sweetalert-react';
import sweetalert from 'sweetalert/dist/sweetalert.css'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render() {
    return(

      <div>
        <Button waves='light' onClick={() => this.setState({ show: true })}>Results</Button>
        <SweetAlert
          show={this.state.show}
          title={this.props.end_message}
          text={`You got ${this.props.score} whole points, well done`}
          onConfirm={() => this.setState({ show: false })}
        />
        <Button waves='light' onClick={this.props.handleReset}>Retry</Button>
      </div>


    )
  }
}




Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  handleReset: PropTypes.func.isRequired
}

Results.defaultProps = {
  end_message: 'Congratulations!'
}

export default Results;
