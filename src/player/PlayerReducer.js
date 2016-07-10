export default function (state, action) {
  switch (action.type) {
    case 'SET_PLAYERS_IN_LOBBY':
      return {
        ...state,
        lobby: action.players,
      };

    default:
      return state || { lobby: [] };
  }
}
