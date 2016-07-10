import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RoomList from './RoomList';

class Rooms extends React.Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
  };

  render() {
    return (
      <RoomList rooms={this.props.rooms} />
    );
  }
}
const mapStateToProps = (state) => ({
  rooms: state.room.list,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const ConnectedRooms = connect(mapStateToProps, mapDispatchToProps)(Rooms);

export default ConnectedRooms;
