import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme:{colors}}) => colors.brandPrimary};
    justify-content: center;
    align-items: center;
`;