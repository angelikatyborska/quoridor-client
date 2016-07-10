import '../setup';
import RoomReducer from '../../src/room/RoomReducer';

describe('RoomReducer', () => {
  it('has initial state', () => {
    const initialState = RoomReducer(undefined, {type: ''});

    expect(initialState).to.deep.equal({list: []});
  });

  describe('SET_ROOMS', () => {
    it('sets the list', () => {
      const action = {type: 'SET_ROOMS', rooms: ['rooms']};
      const oldState = {list: [1, 2, 3]};
      const newState = RoomReducer(oldState, action);

      expect(newState.list).to.deep.equal(['rooms'])
    })
  });
});
