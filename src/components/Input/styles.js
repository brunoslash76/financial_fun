import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    height: 55px;
    padding: 0 15px;
`;

export const TInput = styled.TextInput`
    color: ${({theme: {colors}}) => colors.white};
    flex: 1;
    font-size: ${({theme: { font: { size } }}) => size.title};
    font-family: ${({theme: { font }}) => font.family};
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid ${({theme: { colors }}) => colors.white}
`;