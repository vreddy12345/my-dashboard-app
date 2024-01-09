import React from 'react';
import './image.css'

const ProfilePhoto = ({ imageUrl }) => {
  return (
    <div className="profile-photo-container">
      <img src={imageUrl} alt="Profile" className='image' />
    </div>
  );
};

export default ProfilePhoto;