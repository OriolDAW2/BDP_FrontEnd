import React from 'react';
import { useDispatch} from 'react-redux';
import { useContext } from 'react';
import { UserContext } from '../usercontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./css/profile.css";

import User from '/img/user1.png';


const ProfilePage = () => {
  const { authToken, setAuthToken } = useContext(UserContext);
  const dispatch = useDispatch();

  const user = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={User} alt="Profile Avatar" className="avatar" />
        <div className="profile-info">
          <h1 className="name">{user}</h1>
          <p className="email">{email}</p>
        </div>
      </div>
      <div className="profile-bio">
        <h2>Bio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="social-links">
        <h2>Social Links</h2>
        <ul className="links-list">
          <li>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
