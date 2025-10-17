// API Configuration
export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
export const POSTS_PER_PAGE = 10;

// Task Management
export const TASK_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

export const TASK_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed'
};

// Theme Configuration
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Local Storage Keys
export const LOCAL_STORAGE_KEYS = {
  TASKS: 'tasks',
  THEME: 'theme',
  USER_PREFERENCES: 'userPreferences'
};

// UI Constants
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
};

// Button Variants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger'
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error occurred. Please check your connection.',
  API_ERROR: 'Failed to fetch data from the server.',
  TASK_EMPTY: 'Task cannot be empty.',
  UNKNOWN_ERROR: 'An unknown error occurred.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  TASK_ADDED: 'Task added successfully!',
  TASK_COMPLETED: 'Task marked as completed!',
  TASK_DELETED: 'Task deleted successfully!',
  TASKS_CLEARED: 'Completed tasks cleared!'
};

// Default Values
export const DEFAULTS = {
  TASK: {
    id: null,
    text: '',
    completed: false,
    createdAt: null,
    updatedAt: null
  }
};