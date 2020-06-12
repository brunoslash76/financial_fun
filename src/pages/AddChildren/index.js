import React from 'react';
import { ScrollView, View } from 'react-native';
import { Container } from '../../components';
import { Button, Text, ButtonText, InnerContainer } from './styles';
import { Button as NButton } from '../../components';

export default function AddChildren({ navigation }) {
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
						<Button
							onPress={() => navigation.navigate('ChildProfile')}
						>
							<ButtonText>+Cadastrar novo dependente</ButtonText>
						</Button>
					</View>

					<NButton 
						disable={true} 
						style={{ alignSelf: 'flex-end' }}
					>
						Concluir
					</NButton>
				</InnerContainer>
			</Container>
		</ScrollView>
	);
}
