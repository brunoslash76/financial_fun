import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { isEmpty, objectAlreadyInArray } from '../../../utils/utils.functions';
import {
	Button as NButton,
	Container,
	DependentsList,
} from '../../../components';
import useRegister from '../../../customHooks/registerHook';

import { Button, Text, ButtonText, InnerContainer, ScrollView } from './styles';

export default function AddChildren({ navigation, route }) {
	const [dependentsArray, setDependents] = useState([]);
	const [isButtonDisabled, setButtonDisabled] = useState(true);
	const [
		isAddDependentButtonDisabled,
		setAddDependentButtonDisabled,
	] = useState(false);
	const [userId, setUserId] = useState(null);
	const { getUSersDependents } = useRegister();

	useEffect(() => {
		setUserId(route.params.userId)
	}, [])

	useEffect(() => {

		async function loadDependents() {
			if (route.params.userId) {
				getUSersDependents(route.params.userId, getDependentsObject);
			}
		}
		loadDependents()
		
	}, [userId]);

	useEffect(() => {
		function verifyButtonDisabled() {
			if (dependentsArray.length >= 4) {
				setButtonDisabled(true);
			} else {
				setButtonDisabled(false);
			}
		}
		verifyButtonDisabled();
	}, [dependentsArray]);

	useEffect(() => {
		function verifyDependentsArrayLength() {
			if (dependentsArray.length === 4) {
				setAddDependentButtonDisabled(true);
			}
		}

		verifyDependentsArrayLength();
	}, [dependentsArray]);


	function getDependentsObject(snapshot) {
		const array = [];
		const obj = snapshot.val();
		for (let i in obj) {
			console.tron.log(obj[i])
			array.push(obj[i])
		}

		setDependents(array);
	}

	const onSubmit = () => {};

	return (
		<Container style={{ display: 'flex', justifyContent: 'space-between' }}>
			<InnerContainer>
				<View>
					<Text>
						Agora adicione pelo menos um dependente para participar
						das atividades (podem ser seus filhos, sobrinhos, netos)
					</Text>

					{dependentsArray.length > 0 && (
						<DependentsList dependentsArray={dependentsArray} />
					)}

					<Button
						onPress={() => {
							!isAddDependentButtonDisabled &&
								navigation.navigate('ChildProfile', {userId});
						}}
					>
						<ButtonText disabled={isAddDependentButtonDisabled}>
							+Cadastrar novo dependente
						</ButtonText>
					</Button>
				</View>

				<NButton
					disabled={isButtonDisabled}
					style={{ alignSelf: 'flex-end' }}
					onPress={onSubmit}
				>
					Concluir
				</NButton>
			</InnerContainer>
		</Container>
	);
}
