import styled from 'styled-components/native';

export const Container = styled.Text`
    font-size: ${props => props.theme.font.size.title};
    color: ${props => props.theme.colors.grey};
    margin-bottom: 8px;
    align-self: flex-start;
`;
