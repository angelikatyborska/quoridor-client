import '../setup';
import PlayerReducer from '../../src/player/PlayerReducer';

describe('PlayerReducer', () => {
  it('has initial state', () => {
    const initialState = PlayerReducer(undefined, {type: ''});

    expect(initialState).to.deep.equal({lobby: []});
  });

  describe('SET_PLAYERS_IN_LOBBY', () => {
    it('sets the lobby list', () => {
      const action = {type: 'SET_PLAYERS_IN_LOBBY', players: ['player']};
      const oldState = {lobby: [1, 2, 3]};
      const newState = PlayerReducer(oldState, action);

      expect(newState.lobby).to.deep.equal(['player'])
    })
  });
});
