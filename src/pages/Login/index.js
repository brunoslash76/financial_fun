import React, {useState, useRef} from 'react';
import { TouchableOpacity, Text } from 'react-native'

import { Input, Button } from '../../components'
import { 
  Container,
  ImageBackground,
  ContentContainer,
  Title,
  Paragraph,
  BottomContainer,
} from './styles';

export default function SignUp({navigation}) {

  const passwordRef = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyEmptyData = () => (!(email !== '' && password !== ''));

  const clearData = () => {
    setEmail('');
    setPassword('');
  }

  const shouldNavigate = () => {
    emailRef.current.focus();
    clearData();
    verifyEmptyData() ? null : navigation.navigate('Home')
  };

  return (
    <Container>
      <ImageBackground
        source={require('../../../assets/img/login-background.png')}
      >
        <ContentContainer>
          <Title>Login</Title>
          <Paragraph>Informe seu Email:</Paragraph>
          <Input 
            onChangeText={text => setEmail(text)} 
            value={email} 
            autoCapitalize={false}
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
          />
          <Paragraph>Informe sua senha:</Paragraph>
          <Input 
            onChangeText={text => setPassword(text)} 
            value={password} 
            secureTextEntry 
            autoCapitalize={false}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={shouldNavigate}
          />
          <Button 
            disabled={verifyEmptyData()} 
            onPress={shouldNavigate}
          >
            Entrar
          </Button>
        </ContentContainer>
          
        <BottomContainer>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text>
              <Paragraph>Ainda não tem uma conta? </Paragraph> 
              <Paragraph style={{textDecorationLine: 'underline', lineHeight: 10}}>Cadastre-se</Paragraph>
            </Text>
          </TouchableOpacity>
        </BottomContainer>
      </ImageBackground>
    </Container>
  );
}

