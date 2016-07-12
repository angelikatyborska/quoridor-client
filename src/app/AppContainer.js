import React from 'react';
import { open } from '../message/MessageActions.js';
import JoinContainer from '../lobby/JoinContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.open();
  }

  render() {
    return (<div>
      <h1>Quoridor</h1>
      {
        this.props.currentPlayer.id ?
          this.props.children :
          <JoinContainer />
      }
    </div>);
  }
}

const mapStateToProps = (state) => ({ currentPlayer: state.lobby.currentPlayer });

const mapDispatchToProps = (dispatch) => bindActionCreators({ open }, dispatch);

const ConnectedAppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default ConnectedAppContainer;
