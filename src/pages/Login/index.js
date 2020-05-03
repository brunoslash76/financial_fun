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
  const [isDisabled, setIsDisabled] = useState(true);

  const handleEmail = (text) => {
    setEmail(text);
  }

  const handlePassword = (text) => {
    
  }

  const verifyEmptyData = () => (!(email !== '' && password !== ''));

  return (
    <Container>
      <ImageBackground
        source={require('../../../assets/img/login-background.png')}
      >
        <ContentContainer>
          <Title>Cadastre-se</Title>
          <Paragraph>Informe seu Email:</Paragraph>
          <Input 
            onChangeText={text => setEmail(text)} 
            value={email} 
            autoCapitalize={false}
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Paragraph>Crie sua senha:</Paragraph>
          <Input 
            onChangeText={text => setPassword(text)} 
            value={password} 
            secureTextEntry 
            autoCapitalize={false}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />
          <Button 
            disabled={verifyEmptyData()} 
            onPress={()=> {}}
          >
            Cadastrar
          </Button>
        </ContentContainer>
          
        <BottomContainer>
          <TouchableOpacity
            onPress={() => {}}
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

