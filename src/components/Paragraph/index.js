import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const Paragraph = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}

export default Paragraph;