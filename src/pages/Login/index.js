import React from 'react';
import { Text } from 'react-native';

import { Container, ImageBackground } from './styles';

export default function Login() {
  return (
    <Container>
      <ImageBackground
        source={require('../../../assets/img/login-background.png')}
      >
        <Text>Login</Text>
      </ImageBackground>
    </Container>
  );
}

