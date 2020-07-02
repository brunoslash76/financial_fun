import React from 'react';

import { Container, Text } from './styles';

const ErrorAlert = ({message}) => {
	return (
        <Container>
            <Text>{message}</Text>
        </Container>
    );
};

export default ErrorAlert;
