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

  describe('JOINED_ROOM', () => {
    it('sets the current room', () => {
      const action = { type: 'JOINED_ROOM', room: 'room' };
      const oldState = { currentRoom: {} };
      const newState = reducer(oldState, action);

      expect(newState.currentRoom).to.deep.equal('room');
    });
  });

  describe('LEFT_ROOM', () => {
    it('resets the current room', () => {
      const action = { type: 'LEFT_ROOM', room: 'room' };
      const oldState = { currentRoom: 'room' };
      const newState = reducer(oldState, action);

      expect(newState.currentRoom).to.deep.equal({});
    });
  });
});
