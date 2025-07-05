
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import InvitationCard from '../components/InvitationCard';

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {isAuthenticated ? <InvitationCard /> : <AuthForm />}
    </div>
  );
};

export default Index;
