import { setPlayersInLobby } from '../player/PlayerActions';
import { setRooms } from '../room/RoomActions';

function receive(message) {
  return {
    type: 'MESSAGE_RECEIVED',
    message,
  };
}

function parse(message) {
  return (dispatch) => {
    const parsed = JSON.parse(message);

    if (parsed.type === 'LOBBY_UPDATE') {
      dispatch(setPlayersInLobby(parsed.data.players_in_lobby));
      dispatch(setRooms(parsed.data.rooms));
    }
  };
}

function closed() {
  return {
    type: 'WEBSOCKET_CLOSED',
    websocket: null,
  };
}

function send(message) {
  return (dispatch, getState) => {
    if (getState().message.websocket) {
      getState().message.websocket.send(JSON.stringify(message));
      dispatch({
        type: 'MESSAGE_SENT',
        message,
      });
    }
    else {
      console.log('socket not available');
    }
  };
}

function open() {
  return (dispatch) => {
    const websocket = new WebSocket('ws://localhost:3000');

    websocket.onopen = function () {
      websocket.onmessage = function (event) {
        console.log(event);
        dispatch(receive(event.data));
        dispatch(parse(event.data));
      };
    };

    websocket.onclose = function (event) {
      console.log(event);
      dispatch(closed());
    };

    dispatch({
      type: 'WEBSOCKET_OPENED',
      websocket,
    });
  };
}

function close() {
  return (dispatch, getState) => {
    console.log('close');
    getState().message.websocket.close();
  };
}

export {
  open,
  send,
  close,
};
