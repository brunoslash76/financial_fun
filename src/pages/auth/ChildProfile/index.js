import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
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

const ChildProfile = ({ navigation }) => {
	const nameRef = useRef();
	const ageRef = useRef();

	const [name, setName] = useState(null);
	const [age, setAge] = useState(null);
	const [isButtonDisabled, setButtonDisabled] = useState(true)

	useEffect(() => {
		function verifyButtonDisabled () {
			if (name !== "" && age !== "" && name && age) {
				setButtonDisabled(false)
			} else {
				setButtonDisabled(true)
			}
		}
		verifyButtonDisabled()
	}, [name, age])

	useEffect(() => {
		return function cleanUpFields() {
			setName(null)
			setAge(null)
		}
	}, [])

	function addDependentInfoToParams() {
		if (!name || !age) return;
		navigation.navigate('AddChildren', {
			name,
			age,
		});
	}

	return (
		<ScrollView>
			<Container>
				<KeyboardAvoidingView
					behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
					style={{ flex: 1 }}
				>
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
								onChangeText={setName}
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
				</KeyboardAvoidingView>
			</Container>
		</ScrollView>
	);
};

export default ChildProfile;
