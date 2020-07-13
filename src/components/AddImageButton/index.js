import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

export default function AddImageButton({...rest}) {
  return (
    <Container {...rest}>
      <Image 
        source={require('../../../assets/img/icon-camera.png')}
      />
    </Container>
  );
}
