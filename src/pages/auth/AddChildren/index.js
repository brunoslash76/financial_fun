import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { isEmpty } from '../../../utils/utils.functions';
import { Button as NButton, Container, DependentsList } from '../../../components';

import { Button, Text, ButtonText, InnerContainer, ScrollView } from './styles';

export default function AddChildren({ navigation, route }) {
	const [dependentsArray, setDependents] = useState([]);
	const [isButtonDisabled, setButtonDisabled] = useState(true);
	const [ isAddDependentButtonDisabled, setAddDependentButtonDisabled ] = useState(false)

	useEffect(() => {
		function setDependentsArray() {
			if (isEmpty(route.params) || route.params === undefined) return;
			const array = [...dependentsArray];
			array.push({ ...route.params });
			setDependents(array);
		}

		setDependentsArray();
	}, [route]);

	useEffect(() => {
		function verifyButtonDisabled() {
			if (dependentsArray.length > 0) {
				setButtonDisabled(false);
				console.log(dependentsArray);
			} else {
				setButtonDisabled(true);
			}
		}
		verifyButtonDisabled();
	}, [dependentsArray]);

	useEffect(() => {
		function verifyDependentsArrayLength() {
			if (dependentsArray.length >= 4) {
				setAddDependentButtonDisabled(true)
			}
		}

		verifyDependentsArrayLength()
	}, [dependentsArray])

	return (
		<Container style={{ display: 'flex', justifyContent: 'space-between' }}>
			<InnerContainer>
				<View>
					<Text>
						Agora adicione pelo menos um dependente para participar
						das atividades (podem ser seus filhos, sobrinhos, netos)
					</Text>

					{dependentsArray.length > 0 && 
						<DependentsList dependentsArray={dependentsArray} />
					}

					<Button onPress={() =>  {!isAddDependentButtonDisabled && navigation.navigate('ChildProfile')}}>
						<ButtonText disabled={isAddDependentButtonDisabled}>+Cadastrar novo dependente</ButtonText>
					</Button>
				</View>

				<NButton
					disabled={isButtonDisabled}
					style={{ alignSelf: 'flex-end' }}
				>
					Concluir
				</NButton>
			</InnerContainer>
		</Container>
	);
}
