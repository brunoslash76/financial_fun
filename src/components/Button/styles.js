import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.disabled ? props.theme.colors.offWhite  : props.theme.colors.brandSecondary};
  border-radius: 25px;
  height: 55px;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.font.family};
  color: ${props => props.disabled ? props.theme.colors.greyLight : props.theme.colors.white};
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: ${props => props.theme.font.size.title};
`;