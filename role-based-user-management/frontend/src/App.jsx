import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login/Login';
import AdminView from './components/AdminView/AdminView';
import UserView from './components/UserView/UserView';
import { isAuthenticated, isAdmin } from './utils/auth';
import './App.scss';

// Protected Route Component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin()) {
    return <Navigate to="/user" replace />;
  }

  return children;
};

// Public Route Component (redirect if authenticated)
const PublicRoute = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to={isAdmin() ? "/admin" : "/user"} replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminView />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserView />
              </ProtectedRoute>
            }
          />

          {/* Default Route */}
          <Route
            path="/"
            element={
              <Navigate to={
                isAuthenticated()
                  ? (isAdmin() ? "/admin" : "/user")
                  : "/login"
              } replace />
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
          />
        </Routes>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4aed88',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ff6b6b',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
