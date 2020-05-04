
import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`

`;

export const Title = styled.Text`
    font-family: ${props => props.theme.font.family.ubuntuBold};
    color: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.font.size.title};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: 23px;
    margin-bottom: 32px;
`;

export const Paragraph = styled.Text`
    font-family: ${props => props.theme.font.family.ubuntuRegular};
    color: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.font.size.title};
    font-weight: ${props => props.theme.font.weight.normal};
    line-height: 23px;
    align-self: center;
    text-align: center;
    margin: 16px 0 24px 0;
`;


