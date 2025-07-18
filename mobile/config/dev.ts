// Development Configuration
export const DEV_CONFIG = {
  // Set to true to skip SignUp screen but keep full navigation flow
  SKIP_SIGNUP: true,
  
  // Set to true to use mock data
  USE_MOCK_DATA: true,
  
  // Development API settings
  API_BASE_URL: 'http://192.168.1.1:3002',
  
  // Mock user data
  MOCK_USER: {
    id: 'dev-user-1',
    name: 'Mohammed Azhar Uddin',
    email: 'azhar@example.com',
    phone: '+919948425492',
    firstName: 'Mohammed',
    lastName: 'Azhar Uddin',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  
  // Development features
  FEATURES: {
    SHOW_DEV_INDICATOR: true,
    ENABLE_DEBUG_LOGS: true,
    SKIP_BACKEND_CALLS: false,
  }
};

// Helper function to check if in development mode
export const isDevMode = () => __DEV__;

// Helper function to get development settings
export const getDevConfig = () => {
  if (!isDevMode()) {
    return {
      SKIP_SIGNUP: false,
      USE_MOCK_DATA: false,
      FEATURES: {
        SHOW_DEV_INDICATOR: false,
        ENABLE_DEBUG_LOGS: false,
        SKIP_BACKEND_CALLS: false,
      }
    };
  }
  return DEV_CONFIG;
}; 