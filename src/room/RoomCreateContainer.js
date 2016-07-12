import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RoomCreate from './RoomCreate';
import { createRoom } from './RoomActions';

class RoomCreateContainer extends React.Component {
  static propTypes = {
    currentRoom: PropTypes.object.isRequired,
    createRoom: PropTypes.func.isRequired,
  };

  render() {
    return (
      <RoomCreate {...this.props} />
    );
  }
}
const mapStateToProps = (state) => ({
  currentRoom: state.room.currentRoom,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ createRoom }, dispatch);

const ConnectedRoomCreateContainer =
  connect(mapStateToProps, mapDispatchToProps)(RoomCreateContainer);

export default ConnectedRoomCreateContainer;
