import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    border: 1px solid #afaeae;
    flex-direction: row;
    width: 202px;
    border-radius: 6px;
`;

export const Button = styled(RectButton)`
	background-color: ${(props) => props.active ? props.theme.colors.white : props.theme.colors.brandPrimary};
	height: 55px;
	width: 100px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    color: ${props => {
        return props.active ? props.theme.colors.grey: props.theme.colors.white
    }};
    font-family: ${props => props.theme.font.family.ubuntuRegular};
    font-size: ${props => props.theme.font.size.title};
`;
