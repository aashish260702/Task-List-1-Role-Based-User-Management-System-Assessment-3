import React from 'react';
import { getUser } from '../../utils/auth';
import Navbar from '../Navbar/Navbar';
import './UserView.scss';

const UserView = () => {
  const user = getUser();

  return (
    <div className="user-view">
      <Navbar />
      
      <div className="container">
        <div className="user-content">
          <div className="welcome-card">
            <div className="welcome-header">
              <div className="user-avatar">
                <span>{user?.name?.charAt(0).toUpperCase()}</span>
              </div>
              <div className="welcome-text">
                <h1>Welcome, {user?.name}!</h1>
                <p>You are logged in as a user</p>
              </div>
            </div>
            
            <div className="user-details">
              <div className="detail-item">
                <span className="label">Email:</span>
                <span className="value">{user?.email}</span>
              </div>
              <div className="detail-item">
                <span className="label">Role:</span>
                <span className="value role-user">👤 User</span>
              </div>
              <div className="detail-item">
                <span className="label">Access Level:</span>
                <span className="value">Standard User</span>
              </div>
            </div>
          </div>
          
          <div className="info-cards">
            <div className="card info-card">
              <div className="card-icon">📊</div>
              <h3>Your Dashboard</h3>
              <p>Access your personal dashboard and view your account information.</p>
            </div>
            
            <div className="card info-card">
              <div className="card-icon">🔒</div>
              <h3>Secure Access</h3>
              <p>Your account is secured with role-based access control.</p>
            </div>
            
            <div className="card info-card">
              <div className="card-icon">👥</div>
              <h3>User Community</h3>
              <p>Connect with other users and share your experiences.</p>
            </div>
          </div>
          
          <div className="card restrictions-card">
            <h2>🚫 Access Restrictions</h2>
            <p>As a standard user, you have limited access to certain features:</p>
            <ul>
              <li>❌ Cannot create new users</li>
              <li>❌ Cannot view user management table</li>
              <li>❌ Cannot access admin settings</li>
              <li>✅ Can view your own profile</li>
              <li>✅ Can update your account settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserView;
