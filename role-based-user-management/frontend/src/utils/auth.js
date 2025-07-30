// Token management
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

// User management
export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem('user');
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  const user = getUser();
  return !!(token && user);
};

// Check if user is admin
export const isAdmin = () => {
  const user = getUser();
  return user?.role === 'admin';
};

// Logout function
export const logout = () => {
  removeToken();
  removeUser();
  window.location.href = '/login';
};
