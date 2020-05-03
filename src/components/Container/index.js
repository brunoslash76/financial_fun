import React from 'react';
import { View } from 'react-native';

import { MainContainer, ContentContainer } from './styles';

export default function Container({children}) {
  return (
    <MainContainer>
        <ContentContainer>
            {children}
        </ContentContainer>
    </MainContainer>   
  );
}
