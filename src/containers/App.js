import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageActions from '../actions/MessageActions.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'JOIN',
    };
  }

  componentWillMount() {
    this.props.open();
  }

  render() {
    return (
      <div>
        {this.state.type}
        <h2>Received</h2>
        <ul>
          {this.props.messages.received.map((message, index) => (
            <li key={index}>{JSON.stringify(message)}</li>
            ))}
        </ul>
        <h2>Sent</h2>
        <ul>
          {this.props.messages.sent.map((message, index) => (
            <li key={index}>{JSON.stringify(message)}</li>
          ))}
        </ul>

        <select
          value={this.state.type}
          onChange={(event) => { this.setState({ type: event.target.value }); }}
        >
          <option value="JOIN">Introduce yourself</option>
          <option value="CREATE_ROOM">Create a room</option>
          <option value="JOIN_ROOM">Join a room</option>
          <option value="LEAVE_ROOM">Leave the room</option>
          <option value="START_GAME">Start the game</option>
          <option value="MOVE">Send a move</option>
        </select>

        <input
          placeholder="nickname"
          onChange={(event) => { this.setState({ nickname: event.target.value }); }}
        />
        <input
          placeholder="room id"
          onChange={(event) => { this.setState({ roomId: event.target.value }); }}
        />
        <input
          placeholder="capacity"
          onChange={(event) => { this.setState({ capacity: event.target.value }); }}
        />
        <input
          placeholder="move"
          onChange={(event) => { this.setState({ move: event.target.value }); }}
        />
        <button
          onClick={() => {
            this.props.send(
              {
                type: this.state.type,
                data: {
                  nickname: this.state.nickname,
                  room_id: this.state.roomId,
                  capacity: this.state.capacity,
                  move: this.state.move,
                },
              }
          );
          }}
        >
          send
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MessageActions, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
