import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const ApiIntegration = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPosts = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=10`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(prev => pageNum === 1 ? data : [...prev, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          API Integration - JSONPlaceholder Posts
        </h2>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        {/* Loading and Error States */}
        {loading && page === 1 && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6">
            Error: {error}
            <Button
              variant="primary"
              onClick={() => fetchPosts(page)}
              className="ml-4"
            >
              Retry
            </Button>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {post.body}
              </p>
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-blue-600 dark:text-blue-400">
                  Post ID: {post.id}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {!loading && filteredPosts.length === 0 && posts.length > 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No posts match your search.
          </p>
        )}

        {/* Load More Button */}
        {!loading && posts.length > 0 && filteredPosts.length > 0 && (
          <div className="text-center mt-8">
            <Button
              onClick={loadMore}
              disabled={loading}
              variant="secondary"
            >
              {loading ? 'Loading...' : 'Load More Posts'}
            </Button>
          </div>
        )}

        {loading && page > 1 && (
          <div className="text-center mt-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ApiIntegration;