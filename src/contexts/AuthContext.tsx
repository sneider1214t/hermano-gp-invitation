
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('motogp-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const register = (name: string, email: string, password: string): boolean => {
    try {
      const userData = { name, email, password };
      localStorage.setItem('motogp-credentials', JSON.stringify(userData));
      const userProfile = { name, email };
      setUser(userProfile);
      localStorage.setItem('motogp-user', JSON.stringify(userProfile));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const login = (email: string, password: string): boolean => {
    try {
      const savedCredentials = localStorage.getItem('motogp-credentials');
      if (savedCredentials) {
        const credentials = JSON.parse(savedCredentials);
        if (credentials.email === email && credentials.password === password) {
          const userProfile = { name: credentials.name, email: credentials.email };
          setUser(userProfile);
          localStorage.setItem('motogp-user', JSON.stringify(userProfile));
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('motogp-user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
