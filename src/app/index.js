import { combineReducers } from 'redux';
import message from '../message/MessageReducer';
import player from '../player/PlayerReducer';
import room from '../room/RoomReducer';

export default combineReducers({
  message,
  player,
  room,
});
