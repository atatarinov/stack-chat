import { createStore } from 'redux';

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

const initialState = {
  messages: [],
  message: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, state, { messages: action.messages });
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return Object.assign({}, state, { messages: state.messages.concat(action.message) });
    case WRITE_MESSAGE:
      return Object.assign({}, state, { message: action.message });
    default:
      return state;
  }
}

export function gotMessagesFromServer(arrayOfMessages) {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages: arrayOfMessages
  };
}

export function gotNewMessageFromServer(message) {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message: message
  };
}

export function writeMessage(message) {
  return {
    type: WRITE_MESSAGE,
    message: message
  };
}

const store = createStore(reducer);
export default store;
