// src/components/layout/Navigation.jsx
import React from 'react';
import { Home, PlusCircle, Heart, User } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-sm py-3 px-6 flex justify-between items-center z-50">
      <Home className="text-primary" />
      <PlusCircle className="text-gray-500" />
      <Heart className="text-gray-500" />
      <User className="text-gray-500" />
    </nav>
  );
};

export default Navigation;
