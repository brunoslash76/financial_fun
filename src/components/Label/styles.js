import styled from 'styled-components/native';

export const Container = styled.Text`
    color: ${({theme: { colors: { grey }}}) => grey};
    margin-bottom: 8px;
`;
