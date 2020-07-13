import React, { useState, useRef, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
	Container,
	AddImageButton,
	Button,
	Input,
	Label,
	CameraView,
} from '../../../components';
import { Title, Paragraph } from './styles';
import useRegister from '../../../customHooks/registerHook';

export default function Profile({ route, navigation }) {
	const { updateUserData } = useRegister();

	const nameRef = useRef();
	const ageRef = useRef();
	const cityRef = useRef();

	const [shouldShowCamera, setShowCamera] = useState(false);

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [city, setCity] = useState('');
	const [picture, setPicture] = useState('');
	const [userId, setUserId] = useState(null);

	// useEffect(() => {
	// 	setUserId(route.params.userId);
	// }, []);

	const verifyFields = () => {
		return !(name !== '' && age !== '' && city !== '');
	};

	const onSubmit = () => {
		if (verifyFields()) {
			alert('Error: All fields are required');
			return;
		}

		const res = updateUserData(userId, {
			name,
			age,
			city,
			picture,
		});

		if (res.error) {
			alert(res.error);
			return;
		}

		navigation.navigate('Habits', { userId });
	};

	function handleCameraUse() {
		navigation.navigate('TakeAPicture', { userId })
	}

	return (
		<ScrollView>
			<KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}>
				<Container>
					<Title>
						Precisamos de algumas informações para o seu perfil
					</Title>

					<AddImageButton
						onPress={() => {
							console.tron.log('aqui');
							handleCameraUse();
						}}
					/>
					<Paragraph>
						Escolha uma foto para o seu perfil (opcional)
					</Paragraph>

					<Label>Informe seu nome:</Label>
					<Input
						darkBorder
						onChangeText={setName}
						value={name}
						ref={nameRef}
						returnKeyType='next'
						onSubmitEditing={() => ageRef.current.focus()}
					/>

					<Label>Informe a sua idade:</Label>
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

					<Label>Informe a sua cidade:</Label>
					<Input
						darkBorder
						onChangeText={setCity}
						value={city}
						ref={cityRef}
						returnKeyType='send'
						onSubmitEditing={onSubmit}
					/>

					<Button
						disabled={true /*verifyFields()*/}
						onPress={onSubmit}
					>
						Próximo
					</Button>
				</Container>
			</KeyboardAwareScrollView>
		</ScrollView>
	);
}
