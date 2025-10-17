import React from 'react';
import { Link } from 'react-router-dom';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Organize your tasks efficiently with our powerful task management system. 
          Stay productive and never miss a deadline again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" className="px-8 py-3 text-lg">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/api-demo">
            <Button variant="secondary" className="px-8 py-3 text-lg">
              Explore API Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Task Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Create, organize, and track your tasks with ease. Mark them as completed and filter by status.
          </p>
        </Card>

        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌙</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Dark Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Switch between light and dark themes for comfortable viewing in any lighting condition.
          </p>
        </Card>

        <Card className="text-center p-6">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Works perfectly on all devices - desktop, tablet, and mobile. Access your tasks anywhere.
          </p>
        </Card>
      </div>

      {/* Task Manager Section */}
      <div className="mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Your Task Manager
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Start managing your tasks below. Add new tasks, mark them as completed, or delete them when done.
          </p>
        </div>
        <TaskManager />
      </div>
    </div>
  );
};

export default Home;