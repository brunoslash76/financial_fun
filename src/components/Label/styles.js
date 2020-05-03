import styled from 'styled-components/native';

export const Container = styled.Text`
    font-size: ${({theme: { font: { size } }}) => size.title};
    color: ${({theme: { colors: { grey }}}) => grey};
    margin-bottom: 8px;
    align-self: flex-start;
`;
