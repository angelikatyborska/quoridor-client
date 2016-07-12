export default function (state, action) {
  switch (action.type) {
    case 'SET_PLAYERS_IN_LOBBY':
      return {
        ...state,
        players: action.players,
      };

    case 'JOINED':
      return {
        ...state,
        currentPlayer: action.player,
      };

    default:
      return state || { currentPlayer: {}, players: [] };
  }
}
