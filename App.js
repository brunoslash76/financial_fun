import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/authContext';

import Routes from './src/routes'
import Theme from './src/theme';
import './src/config/reactotron.config';

export default function App() {
  return (
    
    <Theme>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </Theme>
  );
}
