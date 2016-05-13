export default function messages(state = {received: [], sent: []}, action) {
  switch (action.type) {
    case 'WEBSOCKET_OPENED':
    case 'WEBSOCKET_CLOSED':
      return {
        ...state,
        websocket: action.websocket
      };
    case 'MESSAGE_RECEIVED':
      return {
        ...state,
        received: [...state.received, action.message]
      };
    case 'MESSAGE_SENT':
      return {
        ...state,
        sent: [...state.sent, action.message]
      };
    default:
      return state;
  }
}