import '../setup';
import reducer from '../../src/room/RoomReducer';

describe('RoomReducer', () => {
  it('has initial state', () => {
    const initialState = reducer(undefined, { type: '' });

    expect(initialState).to.deep.equal({
      currentRoom: {},
      list: [],
    });
  });

  describe('SET_ROOMS', () => {
    it('sets the list', () => {
      const action = { type: 'SET_ROOMS', rooms: ['rooms'] };
      const oldState = { list: [1, 2, 3] };
      const newState = reducer(oldState, action);

      expect(newState.list).to.deep.equal(['rooms']);
    });
  });
});
