export default function (state, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        list: state.list.concat([action.player])
      };

    case 'REMOVE_PLAYER':
      return {
        ...state,
        list: state.list.filter(player => player.id !== action.player.id)
      };

    default:
      return state || { list: [] };
  }
}
