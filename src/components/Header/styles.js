import styled from 'styled-components/native';

const Text = styled.Text`
	font-size: 18px;
	color: ${(props) => props.theme.colors.grey};
`;

export const Container = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;

	justify-content: space-between;
	padding: 19px 21px 0 21px;
	height: 110px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 0;
`;

export const UserName = styled(Text)`
	text-transform: capitalize;
	font-family: ${(props) => props.theme.font.family.ubuntuBold};
	font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const Logo = styled.Image``;

export const Experience = styled(Text)`
    font-family: ${(props) => props.theme.font.family.ubuntuRegular};
	font-weight: ${(props) => props.theme.font.weight.normal};
`;
