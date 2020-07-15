import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from '../../../components';
import { Container, Text, Indicator, Step } from './styles';

const WalkThrough = ({ handleButton }) => {
	const guideFrases = [
		'Essa é a home do responsável. Aqui é possível ver todos os passos da jornada e checar todo o conteúdo e tarefas planejadas.',
		'Para trocar de conta de usuário, é só clicar no nome da pessoa que está usando lá em cima na esquerda.',
	];

	const buttonText = ['Próxima dica', 'Entendi'];

	const [activeModalTab, setActiveModalTab] = useState(0);
    const [activeMessage, setActiveMessage] = useState(guideFrases[0]);
    
    useEffect(() => {
        setActiveMessage(activeModalTab)
    }, [activeModalTab])

	const handlePress = () => {
		if (activeModalTab === 1) {
			handleButton();
			return;
		}
        setActiveModalTab(activeModalTab + 1);
	};

	return (
		<Container style={{width: '100%'}}>
            <View
                style={{marginBotton: 16}}
            >
                <Indicator/>
            </View>
            <View
                style={{marginBotton: 30}}
            >
				<Text>
					{guideFrases[activeModalTab]}
				</Text>
			</View>
            <View>
				<Button onPress={handlePress} style={{alignSelf: 'center', width: '80%'}}>
					{buttonText[activeModalTab]}
				</Button>
			</View>
            <View 
                style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between', width: 56, alignSelf: 'center'}}
            >
                <Step 
                    isActive={activeModalTab === 0}
                    style={{marginRight: 8}}
                />
                <Step 
                    isActive={activeModalTab === 1}
                />
            </View>
		</Container>
	);
};

export default WalkThrough;
