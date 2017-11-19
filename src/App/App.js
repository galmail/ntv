import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getChatLog } from '../service';
import Message from '../Message';

import './App.css';

class App extends Component {

  componentDidMount() {
    if (this.props.getChatLog) {
      this.props.getChatLog();
    }
  }
  
  render() {
    return (
      <div>
        <h1>Messages</h1>
        <div className="messages">
          { this.props.messages && this.props.messages.map(msg => <Message key={msg.id} {...msg} />) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
