import React, { useState, useRef } from 'react';
import { Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { 
  Container,
  AddImageButton,
  Button,
  Input,
  Label,
} from '../../components';

import {Title, Paragraph} from './styles';

export default function Profile({navigation}) {

  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const verifyFields = () => {
    return !(name !== '' && age !== '' && city !== '')
  }

  return (
    <ScrollView>
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{flex: 1}}
        >
        
          <Title>Precisamos de algumas informações para o seu perfil</Title>

          <AddImageButton onPress={() => console.tron.log('banana')}/>
          <Paragraph>Escolha uma foto para o seu perfil (opcional)</Paragraph>

          <Label>Informe seu nome:</Label>
          <Input 
            darkBorder 
            onChangeText={setName}
            value={name}
            ref={nameRef}
            returnKeyType="next"
            onSubmitEditing={() => ageRef.current.focus()}
          />

          <Label >Informe a sua idade:</Label>
          <Input 
            darkBorder 
            style={{width: 80}}
            onChangeText={setAge}
            value={age}
            ref={ageRef}
            returnKeyType="next"
            onSubmitEditing={() => cityRef.current.focus()}
            enablesReturnKeyAutomatically={true}
          />

          <Label>Informe a sua cidade:</Label>
          <Input 
            darkBorder
            onChangeText={setCity}
            value={city}
            ref={cityRef}
            returnKeyType="send"
            onSubmitEditing={() => console.tron.log('tabatinga')}
          />

          <Button 
            disabled={verifyFields()}
            onPress={() => {/*navigation.navigate()*/} }
          >Próximo</Button>
        </KeyboardAvoidingView>
        </Container>
      </ScrollView>
  );
}
