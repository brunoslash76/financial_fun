import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Input, Button } from '../../../components';
import { signIn } from '../../../services/firebase.auth';
import { useAuthDispatch } from '../../../context/authContext';
import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from '../../../context/authContext/constants';

import {
	Container,
	ImageBackground,
	ContentContainer,
	Title,
	Paragraph,
	BottomContainer,
} from './styles';

export default function Login({ navigation }) {
	const dispatch = useAuthDispatch();

	const passwordRef = useRef();
	const emailRef = useRef();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const verifyEmptyData = () => !(email !== '' && password !== '');

	const clearData = () => {
		setEmail('');
		setPassword('');
	};

	const shouldNavigate = async () => {
		try {
			const response = await signIn(email, password);
			dispatch({ type: LOGIN_SUCCESS, payload: response.user });
		} catch (error) {
			emailRef.current.focus();
			clearData();
		}
	};

	return (
		<Container>
			<ImageBackground
				source={require('../../../../assets/img/login-background.png')}
			>
				<ContentContainer>
					<Title>Login</Title>
					<Paragraph>Informe seu Email:</Paragraph>
					<Input
						onChangeText={(text) => setEmail(text)}
						value={email}
						autoCapitalize='none'
						keyboardType='email-address'
						autoCorrect={false}
						returnKeyType='next'
						onSubmitEditing={() => passwordRef.current.focus()}
						ref={emailRef}
					/>
					<Paragraph>Informe sua senha:</Paragraph>
					<Input
						onChangeText={(text) => setPassword(text)}
						value={password}
						secureTextEntry
						autoCapitalize='none'
						ref={passwordRef}
						returnKeyType='send'
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
							<Paragraph
								style={{
									textDecorationLine: 'underline',
									lineHeight: 10,
								}}
							>
								Cadastre-se
							</Paragraph>
						</Text>
					</TouchableOpacity>
				</BottomContainer>
			</ImageBackground>
		</Container>
	);
}
