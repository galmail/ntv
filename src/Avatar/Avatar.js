import React from 'react';

const Avatar = ({ imageUrl, imageName }) => (
    <div className="avatar">
        <img alt={imageName} src={imageUrl || 'https://api.adorable.io/avatars/100/abott@adorable.png'} />
    </div>
);

export default Avatar;
