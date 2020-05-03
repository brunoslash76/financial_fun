import React from 'react';
import FirebaseService from './src/services/FirebaseService';
import { View } from 'react-native';

import './src/config/reactotron.config';

export default function App() {

    // const user = useAuth()

    React.useEffect(() => {
      const credentials = FirebaseService.login('bruo@email.com', 'btruno@123');
      console.tron.log(credentials);
    }, [])


  return (
    <View></View>
  );
}
