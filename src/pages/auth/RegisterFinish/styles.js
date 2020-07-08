import styled from 'styled-components/native';

export const Title = styled.Text`
    font-family: ${props => props.theme.font.family.ubuntuBold};
	font-weight: bold;
	font-size: 20px;
	color: ${(props) => props.theme.colors.brandSecondary};
`;

export const Strong = styled.Text`
	font-family: ${props => props.theme.font.family.ubuntuBold};
	font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.body};
    color: ${props => props.theme.colors.grey};
`;

export const Text = styled.Text`
    font-family: ${props => props.theme.font.family.ubuntuRegular};
    font-size: ${props => props.theme.font.size.body};
    color: ${props => props.theme.colors.grey};

`;

export const ImageBackground = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export const InnerContainer = styled.View`
	flex: 1;
    height: 100%;
    /* align-items: center; */
    justify-content: center;
`;

export const CardContent = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;
