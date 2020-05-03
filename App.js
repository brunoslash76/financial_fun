import React from 'react';
import { Text, View } from 'react-native';
import Theme from './src/theme';

import './src/config/reactotron.config';

export default function App() {
  return (
    <Theme>
      <View>
        <Text>Yeey Reactotron is now available</Text>
      </View>
    </Theme>
  );
}
