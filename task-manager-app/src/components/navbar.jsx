import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Task Manager
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              onClick={toggleTheme}
              className="flex items-center space-x-2"
            >
              {isDark ? '☀️' : '🌙'}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;