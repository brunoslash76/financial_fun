import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Button } from '../../../components';
import { Container, Content, ContainerContent, Title, Text } from './styles';

const WelcomeCard = ({ handleButtonPress, isVisible }) => {
	return (
		<Container>
			<Card style={{ alignSelf: 'center' }}>
				<Content
					style={{
						alignSelf: 'center',
						alignContent: 'center',
					}}
				>
					<Image
						style={{
							width: 138,
							height: 138,
							alignSelf: 'center',
							marginBottom: 32,
						}}
						source={require('../../../../assets/img/confetti.png')}
					/>
					<Title>UHULLL! BEM-VINDOS!</Title>
				</Content>
				<Content>
					<Text>
						Estamos muito felizes que vocês embarcaram juntos nessa
						fantástica jornada rumo à educação e consciência
						financeira!
					</Text>
				</Content>
				<Content>
					<Button onPress={handleButtonPress}>Próximo</Button>
				</Content>
			</Card>
		</Container>
	);
};

export default WelcomeCard;
