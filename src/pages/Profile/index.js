import React from 'react';
import { Text } from 'react-native';

import { 
  Container,
  AddImageButton,
  Button,
  Input,
  Label,
} from '../../components';

export default function Profile() {
  return (
    <Container>
        <Text>Precisamos de algumas informações para o seu perfil</Text>

        <AddImageButton onPress={() => console.tron.log('banana')}/>
        <Text>Escolha uma foto para o seu perfil</Text>
        <Text>(opcional)</Text>

        <Label>Informe seu nome:</Label>
        <Input darkBorder />

        <Label>Informe a sua idade:</Label>
        <Input darkBorder />

        <Label>Informe a sua cidade:</Label>
        <Input darkBorder />

        <Button disabled>Próximo</Button>
    </Container>
  );
}
