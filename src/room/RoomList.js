import React, { PropTypes } from 'react';

import PlayerList from '../player/PlayerList';

class RoomList extends React.Component {
  static propTypes = {
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        spots_left: PropTypes.number.isRequired,
        players: PropTypes.array.isRequired,
      })
    ).isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.rooms.map(room =>
          <li key={room.id}>
            <h3>{room.capacity - room.spots_left} / {room.capacity} - {room.id}</h3>
            <h4>Players</h4>
            <PlayerList players={room.players} />
          </li>
        )}
      </ul>
    );
  }
}

export default RoomList;
