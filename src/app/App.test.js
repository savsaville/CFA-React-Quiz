import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import { Button, Icon, Col, Card } from 'react-materialize';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('Reset Button returns 0', () => {
 let component = shallow(<App />);
 component.instance().setState = jest.fn();

 component.instance().state = {
   progress: 2,
   selected: 'Pick one!',
   score: 2
 };

 component.instance().retryButton();

 expect(component.instance().setState).toHaveBeenCalledWith({
   progress: 0,
   selected: 'None yet!',
   score: 0
 });
});
