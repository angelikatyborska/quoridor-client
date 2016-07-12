import { send } from '../message/MessageActions';

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
    const action = {
      type: 'JOINED',
      player,
    };
    dispatch(action);
  };
}

function leave(nickname) {
  // TODO: implement
}

function left(nickname) {
  // TODO: implement
}

function setPlayersInLobby(players) {
  return {
    type: 'SET_PLAYERS_IN_LOBBY',
    players,
  };
}

export { join, joined, leave, left, setPlayersInLobby };
