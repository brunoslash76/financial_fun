import styled from 'styled-components/native';
import Title from '../Title'

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 20px;
`;

export const Image = styled.Image``;

export const Text = styled(Title)`
    align-self: center;
    margin: auto 0;
`;
