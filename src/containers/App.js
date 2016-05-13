import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageActions from '../actions/MessageActions.js'

class App extends React.Component {
  componentWillMount() {
    this.props.open();
  }

  render() {
    return (
      <div>
        <h2>Received</h2>
        <ul>
          {this.props.messages.received.map((message, index) => {
            return <li key={index}>{message}</li>
          })}
        </ul>
        <h2>Sent</h2>
        <ul>
          {this.props.messages.sent.map((message, index) => {
            return <li key={index}>{message}</li>
          })}
        </ul>
        <button onClick={ () => { this.props.send('!!!');} } >!!!</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { messages: state.messages }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(MessageActions, dispatch);
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;