import React from 'react';

import "./css/profile.css";

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'I love coding and exploring new technologies.',
    avatar: 'path/to/avatar.png',
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.avatar} alt="Profile Avatar" className="avatar" />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div className="profile-bio">
        <h2>Bio</h2>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
