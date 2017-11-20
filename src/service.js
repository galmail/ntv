import { getMessages, getMembers } from './data';

export const getChatMembers = () => ({ type: 'MEMBERS_LOADING', payload: getMembers() });
export const getChatMessages = () => ({ type: 'MESSAGES_LOADING', payload: getMessages() });
export const getChatLog = () => ({ type: 'CHAT_LOADING', payload: loadChat() });

function loadChat() {
    return new Promise((resolve, reject) => {
        Promise.all([getMessages(), getMembers()]).then(([messages, members]) => {
            resolve(
                combineUsersWithMessages(messages, members)
                .sort(sortMessagesByDate)
            );
        }).catch(reject);
    });
}

export function sortMessagesByDate(msgA, msgB) {
    if (msgA.timestamp < msgB.timestamp) return 1;
    else if (msgA.timestamp > msgB.timestamp) return -1;
    else return 0;
}

export function combineUsersWithMessages(messages = [], users = []) {
    return messages.map(msg => ({
        ...msg,
        user: users.find(user => user.id === msg.userId)
    }));
}



