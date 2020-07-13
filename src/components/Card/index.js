import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const Card = ({children}) => {
  return <Container>{children}</Container>;
}

export default Card;