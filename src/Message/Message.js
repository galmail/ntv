import React from 'react';
import moment from 'moment';

import Avatar from '../Avatar';

import './Message.css';

const Message = ({ id, userId, message, timestamp, user }) => (
    <div className="message">
        <Avatar imageUrl={user && user.avatar} imageName={getName(user)} />
        <div className="message-body">
            <span className="tooltip">{user && user.email}</span>
            <div className="text">{message}</div>
            <div className="time">{moment(timestamp).format('LLL')}</div>
        </div>
    </div>
);

function getName(user) {
    if (!user) return 'avatar';
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    return `${firstName} ${lastName}`;
}

export default Message;
