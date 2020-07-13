import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.View`
position: relative;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    width: 100%;
`;

export const BottomContainer = styled.View`
    position: absolute;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.font.size.title};
    font-weight: ${props => props.theme.font.weight.normal};
    margin-bottom: 8px;
    bottom: 42px;
`;

export const ImageBackground = styled.ImageBackground`
    flex: 1;
    /* resizemode: cover; */
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.font.size.title};
    font-weight: ${props => props.theme.font.weight.bold};
    margin-bottom: 32px;
    align-self: flex-start;
`;

export const Paragraph = styled.Text`
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.font.size.title};
    font-weight: ${props => props.theme.font.weight.normal};
    margin-bottom: 32px;
    align-self: flex-start;
    margin-bottom: 8px;
`;


