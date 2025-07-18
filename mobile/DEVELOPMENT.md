# Development Setup Guide

## Quick Development Mode

This app has been configured for fast development by skipping the authentication flow and starting directly with the main app screens.

### What's Changed

1. **Skipped SignUp Screen**: App bypasses the SignUp screen but keeps full navigation flow
2. **Direct to CreatorPreferences**: When selecting "Sign up" as creator, goes directly to CreatorPreferences
3. **Mock User Data**: Pre-configured user data for testing
4. **Development Indicator**: Shows "DEV MODE" indicator in development
5. **Full Navigation Flow**: All screens available except SignUp

### Available Screens for Development

- **Welcome**: Onboarding screen with sign up/login options
- **UserRole**: Choose between Brand or Creator
- **CreatorPreferences**: Set creator preferences (skips SignUp)
- **ProfileSetup**: Complete profile information
- **Profile**: Main profile screen with tabs (Packages, Portfolio, KYC, Payments)
- **CreatePackage**: Create influencer packages
- **CreatePortfolio**: Add portfolio files
- **ProfileComplete**: Profile completion screen
- **OtpVerification**: Phone verification (if needed)
- **MobileVerifiedScreen**: Mobile verification confirmation
- **GoogleVerifiedScreen**: Google OAuth confirmation

### How to Use

1. **Start Development Server**:

   ```bash
   cd mobile
   npm start
   ```

2. **Run on Device/Simulator**:

   ```bash
   npm run android  # or npm run ios
   ```

3. **Make Changes**: Edit any screen and see changes immediately with Expo

### Configuration

Edit `config/dev.ts` to customize development settings:

```typescript
export const DEV_CONFIG = {
  SKIP_AUTH: true, // Skip authentication flow
  USE_MOCK_DATA: true, // Use mock data
  API_BASE_URL: "http://192.168.1.1:3002", // Your backend URL
  // ... other settings
};
```

### Switching Back to Production

To restore the SignUp screen:

1. Uncomment the SignUp import in `App.tsx`
2. Add SignUp screen to the Stack.Navigator
3. Change UserRoleScreen navigation back to 'SignUp' instead of 'CreatorPreferences'
4. Set `USE_MOCK_DATA: false` in `config/dev.ts`

### Development Tips

- **Fast Iteration**: Changes appear immediately with Expo
- **No EAS Builds**: Use Expo Go or development builds for testing
- **Mock Data**: All user data is pre-configured
- **Backend Integration**: API calls still work if backend is running

### Troubleshooting

- If you see TypeScript errors, run `npm install` to ensure dependencies are up to date
- If navigation doesn't work, check that all screen components are properly imported
- For API issues, ensure your backend is running and accessible

### File Structure

```
mobile/
├── App.tsx                 # Main app with streamlined navigation
├── config/
│   ├── dev.ts             # Development configuration
│   └── env.ts             # Environment variables
├── screens/
│   ├── Profile.tsx        # Main profile screen
│   ├── CreatePackageScreen.tsx
│   ├── CreatePortfolioScreen.tsx
│   └── ProfileCompleteScreen.tsx
└── components/
    ├── DevModeIndicator.tsx  # Development mode indicator
    └── ...
```

This setup allows you to focus on developing the core app features without dealing with authentication complexity.
