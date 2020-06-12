import React, { useRef, useState } from 'react';
import { 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
	Input,
	Label,
	Title,
	Paragraph,
	AddImageButton,
	Button,
	Container,
} from '../../components';

import { Section } from './styles';

const ChildProfile = () => {

  const nameRef = useRef();
  const ageRef = useRef();

  const [name, setName] = useState(null)
  const [age, setAge] = useState(null)

  function verifyFields() {
    return true
  }

	return (
		<ScrollView>
			<Container>
				<KeyboardAvoidingView
					behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
					style={{ flex: 1 }}
				>
					<Title>Preencha as informações do dependente</Title>
					<Section>
						<AddImageButton
							onPress={() => console.tron.log('banana')}
						/>
						<Paragraph>
							Escolha uma foto para o perfil do dependente (opcional)
						</Paragraph>
					</Section>
					<Label>Informe o nome do dependente:</Label>
					<Input
						darkBorder
						onChangeText={() => {}}
						value={name}
						ref={nameRef}
						returnKeyType='next'
						onSubmitEditing={() => ageRef.current.focus()}
					/>

					<Label>Informe a idade do dependente:</Label>
					<Input
						darkBorder
						style={{ width: 80 }}
						onChangeText={setAge}
						value={age}
						ref={ageRef}
						returnKeyType='next'
						onSubmitEditing={() => cityRef.current.focus()}
						enablesReturnKeyAutomatically={true}
					/>

					<Button
						disabled={verifyFields()}
						onPress={() => {
							navigation.navigate('Habits');
						}}
					>
						Próximo
					</Button>
				</KeyboardAvoidingView>
			</Container>
		</ScrollView>
	);
};

export default ChildProfile;
