import '../setup';
import PlayerReducer from '../../src/player/PlayerReducer';

describe('PlayerReducer', () => {
  it('has initial state', () => {
    const initialState = PlayerReducer(undefined, {type: ''});

    expect(initialState).to.deep.equal({list: []});
  });

  describe('ADD_PLAYER', () => {
    it('pushes to the list', () => {
      const action = {type: 'ADD_PLAYER', player: 'player'};
      const oldState = {list: [1, 2, 3]};
      const newState = PlayerReducer(oldState, action);

      expect(newState.list).to.deep.equal([1, 2, 3, 'player'])
    })
  });

  describe('REMOVE_PLAYER', () => {
    it('removes from the list by id', () => {
      const action = {type: 'REMOVE_PLAYER', player: {id: 2}};
      const oldState = {list: [{id: 1}, {id: 2}, {id: 3}]};
      const newState = PlayerReducer(oldState, action);

      expect(newState.list).to.deep.equal([{id: 1}, {id: 3}])
    })
  });
});
