import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageActions from '../actions/MessageActions.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'guest'
    }
  }

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
        <input onChange={(event) => {this.setState({nickname: event.target.value})}}/>
        <button onClick={() => { this.props.send(this.state.nickname);} }>send</button>
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