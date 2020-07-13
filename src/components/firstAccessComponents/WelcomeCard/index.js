import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const WelcomeCard = () => {
  return (
      <Container>
        <Card>
            <View>
                <Image source={require('../../../../assets/img/confetti.png')} />

                
            </View>
        </Card>
      </Container>
  );
}

export default WelcomeCard;