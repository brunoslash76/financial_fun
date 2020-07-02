import React, { 
	useState,
	useRef,
	useEffect,
} from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { checkIfIsEmail, verifyPassword } from '../../../utils/utils.functions';
import { Input, Button, ErrorAlert, FormContainer } from '../../../components';
import {
	Container,
	ImageBackground,
	ContentContainer,
	Title,
	Paragraph,
	BottomContainer,
} from './styles';
import useRegister from './registerHook';

export default function SignUp({ navigation }) {

	const {createUserWithEmailAndPassword, saveUserToRealtimeWith} = useRegister()

	const passwordRef = useRef();
	const emailRef = useRef();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailHasError] = useState(false);
	const [passwordError, setPasswordHasError] = useState(false);
	const [emailAlreadyInUse, setEmailAlreadyInUse] = useState(null)

	const verifyEmptyData = () => !(email !== '' && password !== '');

	const clearData = () => {
		setEmail('');
		setPassword('');
	};

	const handleEmailInput = (text) => {
		if (!checkIfIsEmail(text)) setEmailHasError(true);
		else setEmailHasError(false);
		setEmail(text);
	};

	const handlePasswordInput = (text) => {
		if (!verifyPassword(text)) setPasswordHasError(true);
		else setPasswordHasError(false);
		setPassword(text);
	};

	const onRegisterUser = async () => {
		if (verifyEmptyData()) {
			emailRef.current.focus();
			setPassword('');
		}

		const response = await createUserWithEmailAndPassword(email, password);
		if (response.error) {
			alert(response.error)
			return
		}
		const { user } = response;
		const res = saveUserToRealtimeWith(user.uid, user.email);
		if (res.error) {
			alert(res.error)
			return 
		}
		navigation.navigate('Profile', user)
		clearData();

	};

	return (
		<Container>
			<ImageBackground
				source={require('../../../../assets/img/login-background.png')}
			>
				<ContentContainer>
					<Title>Cadastre-se</Title>
					<Paragraph>Informe seu Email:</Paragraph>
					<FormContainer>
						<Input
							onChangeText={(text) => handleEmailInput(text)}
							value={email}
							autoCapitalize={false}
							keyboardType='email-address'
							autoCorrect={false}
							returnKeyType='next'
							onSubmitEditing={() => passwordRef.current.focus()}
							ref={emailRef}
						/>
						{emailError && <ErrorAlert message={emailAlreadyInUse || 'E-mail inválido'} />}
					</FormContainer>
					<Paragraph>Crie sua senha:</Paragraph>
					<FormContainer>
						<Input
							onChangeText={(text) => handlePasswordInput(text)}
							value={password}
							secureTextEntry
							autoCapitalize={false}
							ref={passwordRef}
							returnKeyType='send'
							onSubmitEditing={onRegisterUser}
						/>
						{passwordError && (
							<ErrorAlert message='Senha tem que ter 8 caractéres' />
						)}
					</FormContainer>
					<Button
						disabled={verifyEmptyData()}
						onPress={onRegisterUser}
					>
						Cadastrar
					</Button>
				</ContentContainer>

				<BottomContainer>
					<TouchableOpacity
						onPress={() => navigation.navigate('Login')}
					>
						<Text>
							<Paragraph>Já tem uma conta? </Paragraph>
							<Paragraph
								style={{
									textDecorationLine: 'underline',
									lineHeight: 10,
								}}
							>
								Entrar
							</Paragraph>
						</Text>
					</TouchableOpacity>
				</BottomContainer>
			</ImageBackground>
		</Container>
	);
}
