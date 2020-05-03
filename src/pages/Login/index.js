import React, {useState, useRef} from 'react';
import { TouchableOpacity, Text } from 'react-native'

import { Input, Button } from '../../components'
import { 
  Container,
  ImageBackground,
  ContentContainer,
  Title,
  Paragraph,
  BottomParagraph,
  BottomContainer,
} from './styles';

export default function Login() {

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (text) => {
    console.tron.log(text);
    setEmail(text);
  }

  const handlePassword = (text) => {
    console.tron.log(text);
    setPassword(text);
  }

  return (
    <Container>
      <ImageBackground
        source={require('../../../assets/img/login-background.png')}
      >
        <ContentContainer>
          <Title>Cadastre-se</Title>
          <Paragraph>Informe seu Email:</Paragraph>
          <Input 
            onChangeText={handleEmail} 
            value={email} 
            autoCapitalize={false}
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Paragraph>Crie sua senha:</Paragraph>
          <Input 
            onChangeText={handlePassword} 
            value={password} 
            secureTextEntry 
            autoCapitalize={false}
            ref={passwordRef}
            returnKeyType="send"
          />
          <Button disabled={true} onPress={()=> {console.tron.log('banana')}}>
            Cadastrar
          </Button>
        </ContentContainer>
          
        <BottomContainer>
          <TouchableOpacity
            onPress={() => console.tron.log('banana')}
          >
            <Text>
              <Paragraph>Já tem uma conta? </Paragraph> 
              <Paragraph style={{textDecorationLine: 'underline', lineHeight: 10}}>Entrar</Paragraph>
            </Text>
          </TouchableOpacity>
        </BottomContainer>
      </ImageBackground>
    </Container>
  );
}

