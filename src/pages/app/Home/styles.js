import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme:{colors}}) => colors.backgroundGrey};
    justify-content: center;
    align-items: center;
    width: 100%;
`;