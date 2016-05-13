function receive(message) {
  return {
    type: 'MESSAGE_RECEIVED',
    message: message
  }
}

function close(message) {
  return {
    type: 'WEBSOCKET_CLOSED',
    websocket: null
  }
}

function send(message)  {
  return (dispatch, getState) => {

    if (getState().messages.websocket) {
      getState().messages.websocket.send(message);
      dispatch({
        type: 'MESSAGE_SENT',
        message: message
      })
    }
    else {
      console.log('socket not available');
    }
  }
}

function open() {
  return (dispatch) => {
    let websocket = new WebSocket("ws://localhost:3000");

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
      websocket: websocket
    });
  }
}

export default {
  open: open,
  send: send
}
