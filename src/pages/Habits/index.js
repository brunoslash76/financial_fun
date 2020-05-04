import React from 'react';
import { View, Slider, ScrollView } from 'react-native';
import {
	Container,
	Title,
	Label,
	Input,
	Button,
  Paragraph,
  Switcher,
} from '../../components';

import { CustomView, SmallText } from './styles';

const Habits = ({ navigation }) => {
	return (
		<ScrollView>
			<Container>
				<View>
					<Title dark style={{marginBottom: 24}}>
						Gostaríamos de saber um pouco mais sobre o seus hábitos
						financeiros. Isso nos ajudará a entender melhor suas
						necessidades
					</Title>
				</View>

				<View>
					<Paragraph dark style={{marginBottom: 16}}>
						O quão importante você considera o assunto de educação
						financeira?
					</Paragraph>
				</View>

				<CustomView style={{marginBottom: 16}}>
					<SmallText>Não é importante</SmallText>
					<SmallText>Muito importante</SmallText>
        </CustomView>
        
				<View style={{margimBottom: 24}}>
					<Slider
						style
						maximumTrackTintColor='#9ef7ec'
						maximumValue={10}
						minimumTrackTintColor='#16B4A1'
						minimumValue={1}
						onValueChange={(e) => console.tron.log(e)}
						step={0.1}
						// value={}
						thumbTintColor='#16B4A1'
					/>
        </View>
        
				<View>
          <Label>Você tem o hábito de poupar?</Label>
          <Switcher 
            text={["Sim", "Não"]}
          />
				</View>

				<View>
					<Label>Você tem o hábito de investir?</Label>
				</View>

				<View>
					<Label>
						Qual é a proporção da renda que você dedica aos
						investimentos / poupança?
					</Label>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						<Input
							darkBorder
							style={{ width: 80 }}
							inputStyle={{ paddingRight: 25 }}
							maxLength={3}
						/>
						<Paragraph
							style={{ position: 'absolute', left: 55, top: 16 }}
						>
							%
						</Paragraph>
					</View>
				</View>

				<View>
					<Paragraph>
						Quais são os tipos de investimentos que você faz?
					</Paragraph>
					<Input darkBorder />
				</View>
				<View>
					<Button disabled onPress={() => {}}>
						Próximo
					</Button>
				</View>
			</Container>
		</ScrollView>
	);
};

export default Habits;
