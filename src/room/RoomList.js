import React, { PropTypes } from 'react';

import PlayerList from '../player/PlayerList';

const roomShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  spots_left: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired,
});

class RoomList extends React.Component {
  static propTypes = {
    rooms: PropTypes.arrayOf(roomShape).isRequired,
    currentRoom: roomShape.isRequired,
    joinRoom: PropTypes.func.isRequired,
    leaveRoom: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.rooms.map(room =>
          <li key={room.id}>
            <h3>{room.capacity - room.spots_left} / {room.capacity} - {room.id}</h3>

            {
              this.props.currentRoom.id === room.id ?
                <button onClick={() => { this.props.leaveRoom(room.id); }}>Leave</button> :
                <button onClick={() => { this.props.joinRoom(room.id); }}>Join</button>

            }
            <h4>Players</h4>
            <PlayerList players={room.players} />
          </li>
        )}
      </ul>
    );
  }
}

export default RoomList;
