import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ContainerContent = styled.View`
    display: flex;
    height: 500px;
    border:1px solid red;
    align-self: center;
`;

export const Content = styled.View`
    display: flex;
    margin-bottom: 24px;
`;

export const Text = styled.Text`
    font-family: ${props => props.theme.font.family.ubuntuRegular};
    font-size: ${props => props.theme.font.size.body};
    color: ${props => props.theme.colors.grey};
    font-size: 20px;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.font.family.ubuntuBold};
	font-weight: bold;
	font-size: 20px;
	color: ${props => props.theme.colors.brandSecondary};
`;