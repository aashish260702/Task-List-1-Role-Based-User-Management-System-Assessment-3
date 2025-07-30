import React from 'react';
import { getUser, logout, isAdmin } from '../../utils/auth';
import './Navbar.scss';

const Navbar = () => {
  const user = getUser();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h2>User Management</h2>
          </div>
          
          <div className="navbar-user">
            <div className="user-info">
              <span className="user-name">{user?.name}</span>
              <span className="user-role">
                {isAdmin() ? '👑 Admin' : '👤 User'}
              </span>
            </div>
            <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
