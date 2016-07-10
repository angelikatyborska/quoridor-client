import React, { PropTypes } from 'react';

class PlayerList extends React.Component {
  static propTypes = {
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.players.map(player =>
          <li key={player.nickname}>{player.nickname} - {player.id}</li>
        )}
      </ul>
    );
  }
}

export default PlayerList;
