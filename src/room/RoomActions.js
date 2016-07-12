import { send } from '../message/MessageActions';

function setRooms(rooms) {
  return {
    type: 'SET_ROOMS',
    rooms,
  };
}

function joinRoom(id) {
  return dispatch => {
    const joinMessage = {
      type: 'JOIN_ROOM',
      data: { room_id: id },
    };

    dispatch(send(joinMessage));
  };
}

function joinedRoom(room) {
  return dispatch => {
    const action = {
      type: 'JOINED_ROOM',
      room,
    };
    dispatch(action);
  };
}

function leaveRoom(id) {
  return dispatch => {
    const leaveMessage = {
      type: 'LEAVE_ROOM',
      data: { room_id: id },
    };

    dispatch(send(leaveMessage));
  };
}

function leftRoom(room) {
  return dispatch => {
    const action = {
      type: 'LEFT_ROOM',
      room,
    };
    dispatch(action);
  };
}

export { setRooms, joinRoom, joinedRoom, leaveRoom, leftRoom };
