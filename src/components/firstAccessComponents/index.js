import React, { useState, Fragment, useEffect } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

import WelcomeCard from './WelcomeCard';
import WalkThrough from './WalkThrough';

const FirstAccessComponents = () => {
	const [modalPresentation, setModalPresentation] = useState(0);
	const [firstModalOpen, setFirstModal] = useState(true);
	const [secondModalOpen, setSecondModal] = useState(false);

	useEffect(() => {
		if (modalPresentation === 1) {
			setFirstModal(false);
			setSecondModal(true);
		} else if (modalPresentation > 1) {
			setFirstModal(false);
			setSecondModal(false);
		}
	}, [modalPresentation]);

	const onButtonPress = () => {
		setModalPresentation(modalPresentation + 1);
	};

	return (
		<Fragment>
			{firstModalOpen && (
				<Modal isVisible={true}>
					<WelcomeCard handleButtonPress={onButtonPress} />
				</Modal>
			)}
			{secondModalOpen && (
				<Modal
					isVisible={true}
					style={{ justifyContent: 'flex-end', margin: 0 }}
				>
					<WalkThrough handleButton={onButtonPress} />
				</Modal>
			)}
		</Fragment>
	);
};

export default FirstAccessComponents;
