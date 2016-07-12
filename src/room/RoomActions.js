import { send } from '../message/MessageActions';

function setRooms(rooms) {
  return {
    type: 'SET_ROOMS',
    rooms,
  };
}

function createRoom(capacity) {
  return dispatch => {
    const message = {
      type: 'CREATE_ROOM',
      data: { capacity },
    };

    dispatch(send(message));
  };
}

function createdRoom(room) {
  return {
    type: 'CREATED_ROOM',
    room,
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
  return {
    type: 'JOINED_ROOM',
    room,
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
  return {
    type: 'LEFT_ROOM',
    room,
  };
}

export { setRooms, createRoom, createdRoom, joinRoom, joinedRoom, leaveRoom, leftRoom };
