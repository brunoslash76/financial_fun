import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { isEmpty } from '../../utils/utils.functions';

import { Container, DependentsList } from '../../components';
import { Button as NButton } from '../../components';

import { Button, Text, ButtonText, InnerContainer } from './styles';

export default function AddChildren({ navigation, route }) {

	const [dependentsArray, setDependents] = useState([]);
	const [ isButtonDisabled, setButtonDisabled] = useState(true)

	useEffect(() => {
		function setDependentsArray() {
			if (isEmpty(route.params) || route.params === undefined) return;
			const array = [...dependentsArray];
			array.push({...route.params});
			setDependents(array);
		}

		setDependentsArray();
	}, [route]);

	useEffect(() => {
		function verifyButtonDisabled() {
			console.log(dependentsArray.length)
			if (dependentsArray.length > 0) {
				setButtonDisabled(true)
			} else {
				setButtonDisabled(true)
			}
		}
		verifyButtonDisabled();
	}, [dependentsArray])

	return (
		<ScrollView>
			<Container
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<InnerContainer>
					<View>
						<Text>
							Agora adicione pelo menos um dependente para
							participar das atividades (podem ser seus filhos,
							sobrinhos, netos)
						</Text>

						{dependentsArray.length > 0 && <DependentsList 
							dependentsArray={dependentsArray}
						/>}

						<Button
							onPress={() => navigation.navigate('ChildProfile')}
						>
							<ButtonText>+Cadastrar novo dependente</ButtonText>
						</Button>
					</View>

					<NButton 
						disabled={true} 
						style={{ alignSelf: 'flex-end' }}
					>
						Concluir
					</NButton>
				</InnerContainer>
			</Container>
		</ScrollView>
	);
}
