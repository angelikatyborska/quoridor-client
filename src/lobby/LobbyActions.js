import { send } from '../message/MessageActions';
import { push } from 'react-router-redux';

function join(nickname) {
  return dispatch => {
    const joinMessage = {
      type: 'JOIN',
      data: { nickname },
    };

    dispatch(send(joinMessage));
  };
}

function joined(player) {
  return dispatch => {
    const joinedMessage = {
      type: 'JOINED',
      data: player,
    };
    dispatch(joinedMessage);
    dispatch(push('/lobby'));
  };
}

function leave(nickname) {
  // TODO: implement
}

function left(nickname) {
  // TODO: implement
}

export { join, joined, leave, left };
