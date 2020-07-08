import React, { useState, useEffect } from 'react';
import { View, Slider, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useRegister from '../../../customHooks/registerHook';
import {
	Container,
	Title,
	Label,
	Input,
	Button,
	Paragraph,
	Switcher,
} from '../../../components';

import { CustomView, SmallText } from './styles';

const Habits = ({ route, navigation }) => {
	const { updateUserData } = useRegister();
	const [financialEducationRange, setFinancialEducationRange] = useState(5);
	const [savingHabitToggler, setSavingHabitToggler] = useState();
	const [investingHabitsToggler, setInvestingHabitsToggler] = useState();
	const [investimentPercentage, setInvestimentPercentage] = useState('');
	const [typesOfInvestiments, setTypesOfInvestiments] = useState('');
	const [isButtonDisabled, setButtonDisabled] = useState(true);
	const [userId, setUserId] = useState(null);

	useEffect(() => setUserId(route.params.userId), []);

	useEffect(() => {
		if (investimentPercentage !== '' && typesOfInvestiments !== '') {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [investimentPercentage, typesOfInvestiments]);

	const handleRangeInput = (event) => {
		setFinancialEducationRange(Math.round(event));
	};

	const handleInvestingHabitsToggler = (value) => {
		setInvestingHabitsToggler(value);
	};

	const handleSavingHabitsToggler = (value) => {
		setSavingHabitToggler(value);
	};

	// silva teles 1468
	const onSubmitData = () => {
		const data = {
			financialEducationRange,
			savingHabitToggler,
			investingHabitsToggler,
			investimentPercentage,
			typesOfInvestiments,
		};

		const response = updateUserData(userId, data);

		if (response.error) {
			alert(response.error);
			return;
		}

		navigation.navigate('AddChildren', { userId });
	};

	const handleChangeText = (text, setState) => {
		setState(text);
	};

	return (
		<ScrollView>
			<KeyboardAwareScrollView style={{ flex: 1, width: '100%' }}>
				<Container>
					<View>
						<Title dark style={{ marginBottom: 24 }}>
							Gostaríamos de saber um pouco mais sobre o seus
							hábitos financeiros. Isso nos ajudará a entender
							melhor suas necessidades
						</Title>
					</View>

					<View>
						<Paragraph dark style={{ marginBottom: 16 }}>
							O quão importante você considera o assunto de
							educação financeira?
						</Paragraph>
					</View>

					<CustomView style={{ marginBottom: 16 }}>
						<SmallText>Não é importante</SmallText>
						<SmallText>Muito importante</SmallText>
					</CustomView>

					<View style={{ marginBottom: 16 }}>
						<Slider
							style
							maximumTrackTintColor='#9ef7ec'
							maximumValue={10}
							minimumTrackTintColor='#16B4A1'
							minimumValue={1}
							onValueChange={(e) => handleRangeInput(e)}
							step={0.1}
							value={financialEducationRange}
							thumbTintColor='#16B4A1'
						/>
					</View>

					<View style={{ marginBottom: 32 }}>
						<Label>Você tem o hábito de poupar?</Label>
						<Switcher
							text={['Sim', 'Não']}
							onPress={handleSavingHabitsToggler}
							setDefaultValue={setSavingHabitToggler}
						/>
					</View>

					<View style={{ marginBottom: 32 }}>
						<Label>Você tem o hábito de investir?</Label>
						<Switcher
							text={['Sim', 'Não']}
							onPress={handleInvestingHabitsToggler}
							setDefaultValue={setInvestingHabitsToggler}
						/>
					</View>
					{/** Percent of income invested */}
					<View style={{ marginBottom: 32 }}>
						<Label>
							Qual é a proporção da renda que você dedica aos
							investimentos / poupança?
						</Label>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Input
								darkBorder
								style={{ width: 80 }}
								inputStyle={{ paddingRight: 25 }}
								maxLength={3}
								onChangeText={(text) => {
									handleChangeText(
										text,
										setInvestimentPercentage
									);
								}}
								value={investimentPercentage}
							/>
							<Paragraph
								style={{
									position: 'absolute',
									left: 55,
									top: 16,
								}}
							>
								%
							</Paragraph>
						</View>
					</View>

					<View style={{ marginBottom: 32 }}>
						<Paragraph>
							Quais são os tipos de investimentos que você faz?
						</Paragraph>
						<Input
							darkBorder
							onChangeText={(text) =>
								handleChangeText(text, setTypesOfInvestiments)
							}
							value={typesOfInvestiments}
							onSubmitEditing={onSubmitData}
						/>
					</View>

					<View style={{ marginBottom: 32 }}>
						<Button
							disabled={isButtonDisabled}
							onPress={onSubmitData}
						>
							Próximo
						</Button>
					</View>
				</Container>
			</KeyboardAwareScrollView>
		</ScrollView>
	);
};

export default Habits;
