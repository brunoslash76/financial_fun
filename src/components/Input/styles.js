import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
`;

export const TInput = styled.TextInput`
    color: ${props => props.theme.colors.white};
    flex: 1;
    font-size: ${props => props.theme.font.size.title};
    font-family: ${props => props.theme.font.family};
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid ${props => props.darkBorder ? props.theme.colors.grey : props.theme.colors.white};
    height: 55px;
    padding: 16px;
    margin-bottom: 32px;
`;