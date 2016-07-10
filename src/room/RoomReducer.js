export default function (state, action) {
  switch (action.type) {
    case 'SET_ROOMS':
      return {
        ...state,
        list: action.rooms,
      };

    default:
      return state || { list: [] };
  }
}
