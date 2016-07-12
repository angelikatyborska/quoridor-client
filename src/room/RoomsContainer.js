import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RoomList from './RoomList';
import { joinRoom, leaveRoom } from './RoomActions';

class Rooms extends React.Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
    currentRoom: PropTypes.object.isRequired,
    joinRoom: PropTypes.func.isRequired,
    leaveRoom: PropTypes.func.isRequired,
  };

  render() {
    return (
      <RoomList {...this.props} />
    );
  }
}
const mapStateToProps = (state) => ({
  rooms: state.room.list,
  currentRoom: state.room.currentRoom,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ joinRoom, leaveRoom }, dispatch);

const ConnectedRooms = connect(mapStateToProps, mapDispatchToProps)(Rooms);

export default ConnectedRooms;
