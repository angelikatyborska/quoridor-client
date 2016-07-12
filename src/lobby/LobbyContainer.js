import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayerList from '../player/PlayerList';

class Players extends React.Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
  };

  render() {
    return (
      <PlayerList players={this.props.players} />
    );
  }
}
const mapStateToProps = (state) => ({
  players: state.lobby.players,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const ConnectedPlayers = connect(mapStateToProps, mapDispatchToProps)(Players);

export default ConnectedPlayers;
