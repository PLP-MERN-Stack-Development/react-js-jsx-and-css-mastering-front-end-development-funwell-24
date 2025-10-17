import React from 'react';
import { Link } from 'react-router-dom';
import ApiIntegration from '../components/ApiIntegration';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiDemo = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          API Integration Demo
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Demonstrating real-time data fetching from JSONPlaceholder API with search, 
          pagination, and error handling features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" className="px-8 py-3 text-lg">
              Back to Tasks
            </Button>
          </Link>
          <a 
            href="https://jsonplaceholder.typicode.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="px-8 py-3 text-lg">
              View API Docs
            </Button>
          </a>
        </div>
      </div>

      {/* API Information */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          About JSONPlaceholder API
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Features Demonstrated:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Real-time data fetching with useEffect</li>
              <li>Loading states and error handling</li>
              <li>Search functionality</li>
              <li>Infinite scrolling pagination</li>
              <li>Responsive grid layout</li>
              <li>Network error simulation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              API Endpoints Used:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>GET /posts - Fetch blog posts</li>
              <li>Pagination with _page and _limit</li>
              <li>Client-side search filtering</li>
              <li>Error state simulation</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* API Integration Component */}
      <ApiIntegration />

      {/* Technical Details */}
      <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Technical Implementation
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              React Hooks Used:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li><code>useState</code> - Managing component state</li>
              <li><code>useEffect</code> - Handling side effects</li>
              <li>Custom hooks for reusable logic</li>
              <li>State for loading and error handling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Features Implemented:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Debounced search functionality</li>
              <li>Infinite scroll pagination</li>
              <li>Loading spinners and skeletons</li>
              <li>Error boundary and retry mechanism</li>
              <li>Responsive card layouts</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ApiDemo;