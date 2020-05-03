import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

export default function Label({children}) {
  return (
    <Container>
        {children}
    </Container>
  );
}
