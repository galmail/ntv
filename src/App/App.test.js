import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Test App Component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App.WrappedComponent />, div);
  });

});

