import { useContext } from 'react';
import { UserContext } from '../usercontext';

import "./css/style.css";

const Logout = () => {
  const { setAuthToken } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    setAuthToken('');
  };

  return (
    <button className='logout-btn' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
