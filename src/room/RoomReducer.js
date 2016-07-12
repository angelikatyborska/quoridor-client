export default function (state, action) {
  switch (action.type) {
    case 'SET_ROOMS':
      return {
        ...state,
        list: action.rooms,
      };

    case 'JOINED_ROOM':
      return {
        ...state,
        currentRoom: action.room,
      };

    case 'LEFT_ROOM':
      return {
        ...state,
        currentRoom: {},
      };

    default:
      return state || { currentRoom: {}, list: [] };
  }
}
