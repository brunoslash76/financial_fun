import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.white};
    padding: 32px 24px 0 24px;
    flex: 1;
    justify-content: space-between;
    height: 475px;
    max-height: 475px;
    border-radius: 16px;
`;


