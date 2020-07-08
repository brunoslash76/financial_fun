import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

import { authenticateCurrentUser } from '../../../services/firebase.auth';
import {useAuthDispatch} from '../../../context/authContext';
import { LOGIN_SUCCESS } from '../../../context/authContext/constants';
import { Button, Container, Card } from '../../../components';
import {
    Text,
	Title,
	Strong,
	InnerContainer,
	ImageBackground,
	CardContent,
} from './styles';

const RegisterFinish = ({ route, navigation }) => {

    const dispatch = useAuthDispatch()
    const [dependentsName, setDependentsName] = useState([]);

	useEffect(() => {
		if (route.params.dependentsNames) {
			setDependentsName(route.params.dependentsNames);
		} else {
			throw new Error('Não existem nomes de dependentes');
		}
    });

	const printDependentsName = () => dependentsName.join(', ');
    
    const handleOnPress = async () => {
        const newUser = await authenticateCurrentUser();
        const user = {...newUser, firstAccess: true}
        dispatch({type: LOGIN_SUCCESS, payload: user})

    }

	return (
		<ImageBackground
			source={require('../../../../assets/img/register-success.png')}
		>
			<Container>
				<InnerContainer>
					<Card style={{ alignSelf: 'center' }}>
						<CardContent>
                            <View
                                style={{alignItems: 'center'}}
                            >
								<Image
                                    source={require('../../../../assets/img/illustration-baloon.png')}
                                    style={{marginBottom: 32}}
								/>
								<Title>UHULL! PARABÉNS!</Title>
							</View>
							<View>
								<Text>
									Agora que <Strong>você</Strong> e{' '}
									<Strong>{printDependentsName()}</Strong> já
									estão devidamente cadastrados, poderão
									aproveitar para aprender bastante sobre como
									lidar com dinheiro.
								</Text>
							</View>
							<View style={{width: '100%'}}>
                                <Text
                                    style={{marginBottom: 32}}
                                >
									Clique no botão abaixo para começar a sua
									jornada!
								</Text>
								<Button
                                    onPress={handleOnPress}
                                    style={{width: '100%'}}
								>
									Começar Jornada
								</Button>
							</View>
						</CardContent>
					</Card>
				</InnerContainer>
			</Container>
		</ImageBackground>
	);
};

export default RegisterFinish;
