import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { Header, FirstAccessComponents } from '../../../components';

import { Container } from './styles';

export default function Home() {


	return (
		<Fragment>
			<Container>
				<Header />
				<Text>Home</Text>
			</Container>
			{true ? <FirstAccessComponents /> : null}
		</Fragment>
	);
}
