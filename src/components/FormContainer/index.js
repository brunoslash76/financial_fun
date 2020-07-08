import React from 'react';

import { Container } from './styles';

const FormContainer = ({ children }) => {
  return (
        <Container>
            {children}
        </Container>
)   ;
}

export default FormContainer;