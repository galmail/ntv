import React from 'react';

import './Message.css';

const Message = ({ id, userId, message, timestamp }) => (
    <div className="message">{message}</div>
);

export default Message;
