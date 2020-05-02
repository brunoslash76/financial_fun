import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import FirebaseService from './src/services/FirebaseService';

import './src/config/reactotron.config';

export default function App() {


  useEffect(() => {

    function auth() {
      const user = FirebaseService.auth('brun@email.com', 'bruno@123');
      if (user.hasError) {
        console.tron.log('error => ', user)
      }
    };

    auth();
    
  }, [])

  return (
    <View>
      <Text>Yeey Reactotron is now available</Text>
    </View>
  );
}
