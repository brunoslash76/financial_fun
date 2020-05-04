import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const Title = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}

export default Title;