import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
`;

export const TInput = styled.TextInput`
    color: ${({theme: {colors}}) => colors.white};
    flex: 1;
    font-size: ${({theme: { font: { size } }}) => size.title};
    font-family: ${({theme: { font }}) => font.family};
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid ${({darkBorder, theme: { colors }}) => darkBorder ? colors.grey : colors.white};
    height: 55px;
    padding: 16px;
    margin-bottom: 32px;
`;