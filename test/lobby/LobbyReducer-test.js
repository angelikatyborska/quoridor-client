import '../setup';
import reducer from '../../src/lobby/LobbyReducer';

describe('LobbyReducer', () => {
  it('has initial state', () => {
    const initialState = reducer(undefined, { type: '' });

    expect(initialState).to.deep.equal({
      currentPlayer: {},
      players: [],
    });
  });

  describe('SET_PLAYERS_IN_LOBBY', () => {
    it('sets the lobby list', () => {
      const action = { type: 'SET_PLAYERS_IN_LOBBY', players: ['player'] };
      const oldState = { players: [1, 2, 3] };
      const newState = reducer(oldState, action);

      expect(newState.players).to.deep.equal(['player']);
    });
  });

  describe('JOINED', () => {
    it('sets the current player', () => {
      const action = { type: 'JOINED', player: 'player' };
      const oldState = { currentPlayer: {} };
      const newState = reducer(oldState, action);

      expect(newState.currentPlayer).to.deep.equal('player');
    });
  });
});
