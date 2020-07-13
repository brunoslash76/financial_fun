import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import useRegister from '../../../customHooks/registerHook';
import {
	Input,
	Label,
	Title,
	Paragraph,
	AddImageButton,
	Button,
	Container,
} from '../../../components';

import { Section, InnerContainer } from './styles';

const ChildProfile = ({ route, navigation }) => {
	const { addUserDependent } = useRegister();

	const nameRef = useRef();
	const ageRef = useRef();

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [picture, setPicture] = useState('');
	const [userId, setUserId] = useState('');
	const [isButtonDisabled, setButtonDisabled] = useState(true);

	useEffect(() => {
		setUserId(route.params.userId);
	}, []);

	useEffect(() => {
		function verifyButtonDisabled() {
			if (name && name !== '' && age && age !== '') {
				setButtonDisabled(false);
			} else {
				setButtonDisabled(true);
			}

			return () => {
				setName('')
				setAge('')
				setPicture('')
			}
		}
		verifyButtonDisabled();
	}, [name, age]);

	useEffect(() => {
		return function cleanUpFields() {
			setName(null);
			setAge(null);
		};
	}, []);

	async function addDependentInfoToParams() {
		if (!name || !age) return;
		const response = await addUserDependent(userId, {name, age, picture});
		if (response && response.error) {
			alert(response.error)
			return
		}
		navigation.navigate('AddChildren', {userId});
	}

	return (
		<ScrollView>
			<Container>
				<InnerContainer>
					<View>
						<Title>Preencha as informações do dependente</Title>
						<Section>
							<AddImageButton
								onPress={() => console.tron.log('banana')}
							/>
							<Paragraph>
								Escolha uma foto para o perfil do dependente
								(opcional)
							</Paragraph>
						</Section>
						<Label>Informe o nome do dependente:</Label>
						<Input
							darkBorder
							onChangeText={(v) => setName(v)}
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
							returnKeyType='send'
							enablesReturnKeyAutomatically={true}
						/>
					</View>
					<Button
						disabled={isButtonDisabled}
						onPress={!isButtonDisabled && addDependentInfoToParams}
					>
						Próximo
					</Button>
				</InnerContainer>
			</Container>
		</ScrollView>
	);
};

export default ChildProfile;
