import React from 'react';
import { Text } from 'react-native';

import { Input, Button } from '../../components'

import { Container, ImageBackground } from './styles';

export default function Login() {
  return (
    <Container>
      <ImageBackground
        source={require('../../../assets/img/login-background.png')}
      >
        <Text>Cadastre-se</Text>
        <Text>Informe seu Email</Text>
        <Input />
        <Text>Crie sua conta</Text>
        <Input />
        <Button disabled={true} onPress={()=> {}}>
          Cadastrar
        </Button>

      </ImageBackground>
    </Container>
  );
}

