import styled from 'styled-components/native';

export const Container = styled.Text`
    color: ${props => props.white ? props.theme.colors.white : props.theme.colors.grey};
    font-size: ${props => props.theme.font.size.title};
    font-weight: ${props => props.theme.font.weight.bold};
    align-self: flex-start;
    margin-bottom: 32px;
`;