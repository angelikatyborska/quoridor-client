import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { join } from './LobbyActions.js';

import Join from './Join';

class JoinContainer extends React.Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Join {...this.props} />
    );
  }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({ join }, dispatch);

const ConnectedJoinContainer = connect(mapStateToProps, mapDispatchToProps)(JoinContainer);

export default ConnectedJoinContainer;
