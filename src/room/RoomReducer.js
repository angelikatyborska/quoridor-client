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

    default:
      return state || { currentRoom: {}, list: [] };
  }
}
