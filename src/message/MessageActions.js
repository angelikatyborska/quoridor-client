import { joined, setPlayersInLobby } from '../lobby/LobbyActions';
import { setRooms, createdRoom, joinedRoom, leftRoom } from '../room/RoomActions';

function receive(message) {
  return {
    type: 'MESSAGE_RECEIVED',
    message,
  };
}

function parse(message) {
  return (dispatch) => {
    const parsed = JSON.parse(message);

    switch (parsed.type) {
      case 'LOBBY_UPDATE':
        dispatch(setPlayersInLobby(parsed.data.players_in_lobby));
        dispatch(setRooms(parsed.data.rooms));
        break;

      case 'JOINED':
        dispatch(joined(parsed.data));
        break;

      case 'CREATED_ROOM':
        dispatch(createdRoom(parsed.data));
        dispatch(joinedRoom(parsed.data));
        break;

      case 'JOINED_ROOM':
        dispatch(joinedRoom(parsed.data));
        break;

      case 'LEFT_ROOM':
        dispatch(leftRoom(parsed.data));
        break;

      default:
        break;
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
      alert('socket not available');
    }
  };
}

function open() {
  return (dispatch) => {
    const websocket = new WebSocket('ws://localhost:3000');

    websocket.onopen = function () {
      websocket.onmessage = function (event) {
        dispatch(receive(event.data));
        dispatch(parse(event.data));
      };
    };

    websocket.onclose = function (event) {
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
    getState().message.websocket.close();
  };
}

export {
  open,
  send,
  close,
};
