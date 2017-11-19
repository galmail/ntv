import React from 'react';

import './Message.css';

const Message = ({ id, userId, message, timestamp, user }) => (
    <div className="message">
        {message}
        <span className="tooltip">{user && user.email}</span>
    </div>
);

export default Message;
