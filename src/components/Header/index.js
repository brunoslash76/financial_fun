import React from 'react';
import { View } from 'react-native';

import { Container, UserName, Logo, Experience } from './styles';

const Header = () => {
    return (
        <Container>
            <UserName>Jonas</UserName>
            <Logo source={require('../../../assets/img/raise.png')}></Logo>
            <Experience>0 XP</Experience>
        </Container>
    );
}

export default Header;