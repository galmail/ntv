import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export function reducer(state, action = {}) {
  
  // console.log('Message Dispatched', action.type);

  switch (action.type){
    case 'MESSAGES_LOADING_FULFILLED':
      return { ...state, messages: action.payload };
    case 'MEMBERS_LOADING_FULFILLED':
      return { ...state, members: action.payload };
    case 'CHAT_LOADING_FULFILLED':
      return { ...state, messages: action.payload };
    default:
      return state;
  }

}

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));