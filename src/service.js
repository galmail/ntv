import { getMessages, getMembers } from './data';

export const getChatMembers = () => ({ type: 'MEMBERS_LOADING', payload: getMembers() });
export const getChatLog = () => ({ type: 'MESSAGES_LOADING', payload: getMessages() });
