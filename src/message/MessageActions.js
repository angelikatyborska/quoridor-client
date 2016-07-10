function receive(message) {
  return {
    type: 'MESSAGE_RECEIVED',
    message,
  };
}

function close() {
  return {
    type: 'WEBSOCKET_CLOSED',
    websocket: null,
  };
}

function send(message) {
  return (dispatch, getState) => {
    if (getState().messages.websocket) {
      getState().messages.websocket.send(JSON.stringify(message));
      dispatch({
        type: 'MESSAGE_SENT',
        message,
      });
    }
    else {
      console.log('socket not available');
    }
  };
}

function open() {
  return (dispatch) => {
    const websocket = new WebSocket('ws://localhost:3000');

    websocket.onopen = function () {
      websocket.onmessage = function (event) {
        console.log(event);
        dispatch(receive(event.data));
      };
    };

    websocket.onclose = function (event) {
      console.log(event);
      dispatch(close());
    };

    dispatch({
      type: 'WEBSOCKET_OPENED',
      websocket,
    });
  };
}

export default {
  open,
  send,
};
